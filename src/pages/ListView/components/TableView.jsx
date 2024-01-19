import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel, getSortedRowModel, getFilteredRowModel } from "@tanstack/react-table"
import Mdata from "../../../utils/jsonviewer.json"
import { useMemo, useState } from "react"
import { FaAngleLeft } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";



const TableView = () => {

  const data = useMemo(() => Mdata, [])
  const [sorting, setSorting] = useState([])
  const [filtering, setFiltering] = useState('')
  const columns = [
    {
      header:"No",
      accessorKey: 'id',

    },

    {
      header: 'Ride Unique ID',
      accessorKey: 'ride_uuid',
    },

    {
      header: 'Vehical IMEI NO',
      accessorKey: 'imei',
    },

    
        {
          header: 'Start Date',
          accessorKey: 'start_date',
          // cell:info=>moment.unix(info.getvalue())
        },
        {
          header: 'End Date',
          accessorKey: 'end_date',
        },
        {
          header: 'Start Time',
          accessorKey: 'start_time',
          // cell:info=>moment.unix(info.getvalue())
        },
        {
          header: 'End Time',
          accessorKey: 'end_time',
        },

      
    

    
      
    
        {
          header: 'Start Longtitude',
          accessorKey: 'start_long',
          // cell:info=>moment.unix(info.getvalue())
        },
        {
          header: 'Start Latitude',
          accessorKey: 'start_lat',
        },
        {
          header: 'End Longtitude',
          accessorKey: 'end_long',
          // cell:info=>moment.unix(info.getvalue())
        },
        {
          header: 'Start Latitude',
          accessorKey: 'end_lat',
        },

      
    


    // {
    //   header: 'Start Location',
    //   accessorKey: 'start_coordinates',
    // },
    // {
    //   header: 'End Location',
    //   accessorKey: 'end_coordinates',
    // },
  ]

  const table = useReactTable(
    {
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      state: {
        sorting: sorting,
        globalFilter: filtering
      },
      onSortingChange: setSorting,
      onGlobalFilterChange: setFiltering
    }
  )

  return (
    <>
      <div className="w3-container  border border-black p-5 ml-20 mr-14 mt-5 " >
        <div className="flex items-center ">
          <div className="text-center pr-72" >
            <input type="text" value={filtering} className="border border-black p-5 mb-5   rounded-full" onChange={e => setFiltering(e.target.value)} placeholder="Search In All Results..." />
          </div>
          <div className="text-center " >
            <p className="text-center font-bold text-3xl" >List View Of IOT Devices</p>
          </div>
        </div>
        <table className="w3-table-all " >

          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}  >
              {
                headerGroup.headers.map(header => <th key={header.id} onClick={header.column.getToggleSortingHandler()
                } >
                  {header.isPlaceholder ? null : (
                    <div>
                      {
                        flexRender(header.column.columnDef.header, header.getContext())
                      }
                      {
                        { asc: "⬆️", desc: "🔽" }[header.column.getIsSorted() ?? null]
                      }

                    </div>)}


                </th>)
              }
            </tr>
          ))}


          <tbody>

            {
              table.getRowModel().rows.map(row => (
                <tr key={row.id} >
                  {
                    row.getVisibleCells().map(cell => (
                      <td key={cell.id} >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))
                  }
                </tr>
              ))
            }

          </tbody>
        </table>
        <div className="flex justify-center gap-5 mt-5 " >
          <button onClick={() => table.setPageIndex(0)} ><FaAnglesLeft /></button>
          <button disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()} > <FaAngleLeft /> </button>

          <button disabled={!table.getCanNextPage()} onClick={() => table.nextPage()} > <FaAngleRight /> </button>
          <button onClick={() => table.setPageIndex(table.getPageCount() - 1)} > <FaAnglesRight /> </button>
        </div>
      </div>
    </>
  )
}

export default TableView