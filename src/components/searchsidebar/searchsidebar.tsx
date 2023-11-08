'use client'
import styles from "@/components/searchsidebar/searchsidebar.module.css"
const SearchSideBar =() =>{
    return (
        <div className={`flex flex-col rounded-md ${styles['booking-search-box']}`}>
            <div className={`flex items-center justify-between ${styles['booking-header']}`}>
                <span>Tìm kiếm</span>
                <button>`</button>
            </div>
            <div className={``}></div>
        </div>
    );
}
export default SearchSideBar;