import React, { useState, useRef } from 'react';
import { format } from 'date-fns';
import styles from '@/components/header/header.module.scss'
// import { useDispatch } from 'react-redux';
import useOnClickOutside from '@/hooks/use-click-outside';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import imgBg from '@/assets/images/header-background.png';
// import HomeAction from '../../../redux/home/action';
import Image from "next/image";
// import { useRouter } from 'next/router';
import IcLocation from '../icons/ic-location';
import IcCalendar from '../icons/ic-calendar';
import { DateRange } from "react-date-range";
import IcGlass from '../icons/ic-glass';
const Header: React.FC = () => {
//   const dispatch = useDispatch();
  const dateRef = useRef(null);
  const optionRef = useRef(null);

  // const router = useRouter();
  const [destination, setDestination] = useState('');
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 2,
    children: 0,
    room: 1,
  });

  // const handleOption = (name: string, operation: 'i' | 'd') => {
  //   setOptions((prev) => ({
  //     ...prev,
  //     [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
  //   }));
  // };

  const handleSubmit = () => {
    const filter = {
      destination: destination,
      date: {
        startDate: date[0].startDate,
        endDate: date[0].endDate,
      },
      options: options,
    };

    // dispatch({
    //   type: HomeAction.SEARCH_HOTELS,
    //   filter: filter,
    // });

    // router.push('/searchresults');
  };

  useOnClickOutside(dateRef, () => {
    setOpenDate(false);
  });

  useOnClickOutside(optionRef, () => {
    setOpenOptions(false);
  });
  interface Range {
    startDate?: Date;
    endDate?: Date;
  }
  return (
    <header >
      <div className={`${styles['header-image']}`}>
        <Image src={imgBg} alt= ""/>
      </div>
      <div className={`hidden md:flex  ${styles['header-search']}`}>
      <div className={` ${styles['header-search-item']} flex items-center`}>
          <IcLocation />
          <div className={`${styles['search-item-right']} flex flex-col ml-2`}>
            <span className={''}>Điểm đến</span>
            <input
              className='focus:outline-none border-none'
              placeholder='Nhập điểm đến'
              onChange={(e) => setDestination(e.target.value)}
              type="text" />
          </div>
        </div>
        <div className={`${styles['header-search-item']}`} ref={dateRef}>
          <div className='flex items-center h-full' onClick={() => { setOpenDate(!openDate) }} style={{ cursor: "pointer" }}>
            <IcCalendar />
            <div
              className={`flex justify-between w-full`}>
              <div className={`${styles['search-item-right']} flex flex-col justify-center ml-2 mr-2 `}>
                <span className={''}>Nhận phòng</span>
                <span>{`${format(date[0].startDate, 'MM/dd/yyyy')}`}</span>
              </div>
              <div className={` ${styles['search-item-right']} flex flex-col ml-2`}>
                <span className={''}>Trả phòng</span>
                <span>{`${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
              </div>
            </div>
          </div>
          <div className={''}>
            {openDate && <DateRange
              editableDateInputs={true}
              // onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
            />}
          </div>
        </div>
        <div
          ref={optionRef}
          className={`${styles['header-search-item']} flex items-center`}>
          <div className={`${styles['search-item-right']} flex flex-col ml-2`} >
            <span className={styles['item-label']} onClick={() => setOpenOptions(!openOptions)} style={{ cursor: "pointer" }}>Số khách</span>
            <div
               className={styles['header-search-text']}>
              {`${options.adult} người lớn · ${options.children} trẻ em · ${options.room} phòng`}
              {openOptions &&
                <div className={styles['option-box']}>
                  <div className={styles['option-item']}>
                    <span className={styles['option-item']}>Người lớn</span>
                    <div className={styles['option-counter']}>
                      <button
                        disabled={options.adult <= 1}
                        className={styles['optionCounterButton']}
                        // onClick={() => handleOption("adult", "d")}
                      >
                        -
                      </button>
                      <span className={styles['optionCounterNumber']}>
                        {options.adult}
                      </span>
                      <button
                          className={styles['optionCounterButton']}
                        // onClick={() => handleOption("adult", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className={styles['option-item']} >
                    <span className={styles['option-item']}>Trẻ em</span>
                    <div  className={styles['option-counter']}>
                      <button
                        disabled={options.children <= 0}
                        className={styles['optionCounterButton']}
                        // onClick={() => handleOption("children", "d")}
                      >
                        -
                      </button>
                      <span className={styles['optionCounterNumber']} >
                        {options.children}
                      </span>
                      <button
                         className={styles['optionCounterButton']}
                        // onClick={() => handleOption("children", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className={styles['option-item']}>
                    <span className={styles['option-item']} >Phòng</span>
                    <div className={styles['option-counter']}>
                      <button
                        disabled={options.room <= 1}
                        className={styles['optionCounterButton']}
                        // onClick={() => handleOption("room", "d")}
                      >
                        -
                      </button>
                      <span className={styles['optionCounterNumber']}>
                        {options.room}
                      </span>
                      <button
                       className={styles['optionCounterButton']}
                        // onClick={() => handleOption("room", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>}
            </div>
          </div>
        </div>
        <div className={`${styles['header-search-submit']}  flex items-center`} onClick={handleSubmit}>
          <IcGlass />
        </div>
      </div>
    </header>
  );
};

export default Header;
