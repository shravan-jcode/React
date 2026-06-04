import React from 'react'
import SyncAsync01 from './API fundamentals/SyncAsync01'
import FetchSingleApi02 from './API fundamentals/FetchSingleApi02'
import SearchablePage from './API fundamentals/SearchablePage'
import SequentialReq from './Advanced data loading Pattern/SequentialReq'
import ParallelReq from './Advanced data loading Pattern/ParallelReq'
import Pagination from './Advanced data loading Pattern/Pagination'
import InfiniteScrollProductList from './Advanced data loading Pattern/InfiniteScrollProductList'

const App = () => {
  return (
    <div>

      {/* fundamental */}

      {/* <SyncAsync01 /> */}
      {/* <FetchSingleApi02 /> */}
      {/* <SearchablePage/> */}

      {/* <SequentialReq /><hr /><hr /> */}
      {/* <ParallelReq /> */}
      {/* <Pagination /> */}
      <InfiniteScrollProductList />
    </div>
  )
}

export default App