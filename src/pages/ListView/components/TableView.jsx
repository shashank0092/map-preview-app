import {useReactTable,getCoreRowModel,flexRender,getPaginationRowModel,getSortedRowModel,getFilteredRowModel} from "@tanstack/react-table"
import Mdata from "../../../utils/data.json"
import { useMemo, useState } from "react"
import { FaAngleLeft } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";



const TableView = () => {

  const data=useMemo(()=>Mdata,[])
  const[sorting,setSorting]=useState([])
  const[filtering,setFiltering]=useState('')
  const columns=[
    {
      header:'Ride Unique ID',
      accessorKey:'ride_uuid',
    },
    {
      header:'Vehical IMEI NO',
      accessorKey:'imei',
    },

    {
      header:"Timing",
      columns:[
        {
      header:'Start Time',
      accessorKey:'start_timestamp',
      // cell:info=>moment.unix(info.getvalue())
    },
    {
      header:'End Time',
      accessorKey:'end_timestamp',
    }
      ]
    },
   
    
    {
      header:'Start Location',
      accessorKey:'start_coordinates',
    },
    {
      header:'End Location',
      accessorKey:'end_coordinates',
    },
  ]

  const table=useReactTable(
    {
      data,
      columns,
      getCoreRowModel:getCoreRowModel(),
      getPaginationRowModel:getPaginationRowModel(),
      getSortedRowModel:getSortedRowModel(),
      getFilteredRowModel:getFilteredRowModel(),
      state:{
        sorting:sorting,
        globalFilter:filtering
      },
      onSortingChange:setSorting,
      onGlobalFilterChange:setFiltering
    }
    )

  return (
    <>
        <div className="w3-container mt-5" >
        <div>
        <input type="text" value={filtering} className="border border-black p-5  mb-5 rounded-full" onChange={e=>setFiltering(e.target.value)} placeholder="Search In All Results..." />
        </div>
          <table className="w3-table-all" >
         
            {table.getHeaderGroups().map(headerGroup=>(
              <tr key={headerGroup.id}  >
                {
                  headerGroup.headers.map(header=> <th key={header.id} onClick={header.column.getToggleSortingHandler()
                  } >
                    {header.isPlaceholder?null: (
                    <div>
                      {
                        flexRender(header.column.columnDef.header,header.getContext())
                      }
                      {
                      {asc:"⬆️",desc:"🔽"}[header.column.getIsSorted()?? null]
                    }

                    </div>) }

                    
                  </th> )
                }
              </tr>
            ))}
           

            <tbody>

              {
                table.getRowModel().rows.map(row=>(
                  <tr key={row.id} >
                    {
                      row.getVisibleCells().map(cell=>(
                        <td key={cell.id} >
                          {flexRender(cell.column.columnDef.cell,cell.getContext())}
                        </td>
                      ))
                    }
                  </tr>
                ))
              }
           
            </tbody>
          </table>
          <div className="flex justify-center gap-5 mt-5 " >
            <button onClick={()=>table.setPageIndex(0)} ><FaAnglesLeft/></button>
            <button disabled={!table.getCanPreviousPage()} onClick={()=>table.previousPage()} > <FaAngleLeft/> </button>

            <button disabled={!table.getCanNextPage()} onClick={()=>table.nextPage()} > <FaAngleRight/> </button>
            <button onClick={()=>table.setPageIndex(table.getPageCount()-1)} > <FaAnglesRight/> </button>
          </div>
        </div>
    </>
  )
}

export default TableView