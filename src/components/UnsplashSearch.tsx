import { useState, useEffect } from "react";
import unsplash from "../utils/unsplashConfig";
import { useAppStore } from "@/model/app.store";
import { Basic } from "unsplash-js/dist/methods/photos/types";
import { useIntl } from "react-intl";
interface UnsplashSearchProps {
  pic_width: number;
  pic_height: number;
}

const UnsplashSearch = (props: UnsplashSearchProps) => {
  const [imageList, setImageList] = useState<Basic[]>([]);
  const setappset = useAppStore((state) => state.setSettings);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [perPage, setPerPage] = useState(12);
  const [searchText, setSearchText] = useState("setup");
  const appset = useAppStore((state) => state.settings);
  const intl = useIntl();

  const searchImages = () => {
    DoSearch();
  };

  const selectImage = (image: Basic) => {
    setappset({ ...appset, bgImg: { imgurl: image.urls.regular } });
  };

  const handleSearchSubmit = (e: any) => {
    e.preventDefault();
    searchImages();
  };

  useEffect(() => {
    DoSearch();
  }, [page, perPage]);

  function DoSearch() {
    unsplash.search
      .getPhotos({
        query: searchText,
        page,
        perPage,
      })
      .then((response) => {
        // console.log(response.response);
        setTotalPages(response.response?.total_pages || 0);
        setImageList(response.response?.results || []);
      });
  }

  return (
    <div className="h-full">
      <div className="flex flex-col p-2  bg-white items-center justify-center h-full">
        <div className="flex items-center w-full px-6 ">
          <form onSubmit={(e) => handleSearchSubmit(e)} className=" mx-auto w-full flex bg-gray-50 rounded-full border border-gray-50 mb-2">
            <input
              type="text"
              value={searchText}
              placeholder="Search photos"
              className="focus:outline-none w-full text-lg bg-gray-50  p-1 px-4  rounded-full  "
              onChange={(e) => setSearchText(e.target.value)}
            />

            <button type="submit" onClick={() => searchImages()}>
              <svg
                className="w-9 h-9 ml-auto  p-2 bg-gray-700 hover:bg-gray-800 text-white rounded-full"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </form>
        </div>
        <div
          style={{ height: `var(--editor-view-height)` }}
          className={` overflow-y-scroll w-full pb-12 overflow-x-hidden  justify-center flex flex-wrap`}
        >
          {imageList.map((image) => {
            return (
              <div key={image.id} className={`rounded-lg relative cursor-pointer m-1 `} style={{ width: props.pic_width, height: props.pic_height }}>
                <span className="font-Inter top-2 left-2 absolute text-sm font-semibold text-white opacity-50 ">Click to Select</span>
                <img
                  src={image.urls.regular}
                  alt={image.alt_description || ""}
                  onClick={() => selectImage(image)}
                  className="rounded-lg object-cover h-full w-full"
                />
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-2 py-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-3 py-1 bg-gray-200 rounded-md disabled:opacity-50"
          >
            {intl.formatMessage({ id: "previous" })}
          </button>
          <span className="text-sm">{`${intl.formatMessage({ id: "pageof" }, { page, total: totalPages })}`}</span>
          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={page >= totalPages}
            className="px-3 py-1 bg-gray-200 rounded-md disabled:opacity-50"
          >
            {intl.formatMessage({ id: "next" })}
          </button>
          <select value={perPage} onChange={(e) => setPerPage(Number(e.target.value))} className="ml-4 px-2 py-1 bg-gray-200 rounded-md">
            <option value="12">{intl.formatMessage({ id: "12perpage" })}</option>
            <option value="24">{intl.formatMessage({ id: "24perpage" })}</option>
            <option value="36">{intl.formatMessage({ id: "36perpage" })}</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default UnsplashSearch;
