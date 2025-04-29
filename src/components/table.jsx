
import Select from 'react-select'
import { useState } from 'react';

function Table({columns, data}){

    const options = [
        { value: 'All', label: 'All' },
        { value: 'Today', label: 'Today' },
        { value: '3 Days Ago', label: '3 Days Ago' },
        { value: '1 Week Ago', label: '1 Week Ago' }
      ]

      const status = [
        { value: 'All', label: 'All' },
        { value: 'pending', label: 'Pending' },
        { value: 'completed', label: 'Completed' },
      ]

      const sort = [
        { value: 'ascending', label: 'Ascending' },
        { value: 'descending ', label: 'descending' },
      ]

    const [searchTerm, setSearchTerm] = useState();
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [selectStatus, setSelectStatus] = useState(status[0]);
    const [selectOrder, setSelectOrder] = useState();
    const [filterData, setFilterData] = useState(data);

    const customStyles = {
        control: (base, state) => ({
            ...base,
            borderRadius: "50px",
            border: '0.5px solid #888888',
            padding: '5px',
            color: "#575757",
            fontSize: "15px",
            fontWeight: "600",
            lineHeight: "normal",
        }),
        placeholder: (base, state) => ({
            ...base,
            color: '#5656565',
            fontSize: '14px',
            fontWeight: '500',
          }),
        option: (base, state) => ({
            ...base,
            color: "#575757",
            fontSize: "15px",
            fontWeight: "600",
        })
    } 

    const formatDate = (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }

      const handleTime = (option) => {
        setSelectedOption(option);

        const today = new Date();
        const value = option.value;

        if(value === "Today"){
            const currentDate = formatDate(today);
            const filterRecords = data.filter((record) => record.date === currentDate);
            setFilterData(filterRecords);
        }
        if(value === "All"){
            setFilterData(data);
        }
        if(value === "3 Days Ago" || value === "1 Week Ago"){
            const subtractDays = value === "3 Days Ago" ? 3 : 7;
            const pastDate = new Date();
            pastDate.setDate(today.getDate() - subtractDays);
            const formatPastDate = formatDate(pastDate);

            const filterRecords = data.filter((record) => record.date === formatPastDate);
            setFilterData(filterRecords);
        }
    }

    const handleStatus = (option) => {
        setSelectStatus(option);
        const value = option.value;
        if(value === "completed" || value === "pending"){
            const filterItems = data.filter((items) => items.status === value);
            setFilterData(filterItems);
        } else{
            setFilterData(data);
        }
    }

    const handleOrder = (option) => {
        setSelectOrder(option);
        const value = option.value;
        const sortData = [...data].sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
             if(value === "descending"){
               return dateB.getTime() - dateA.getTime();
            } else if(value === "ascending"){
               return dateA.getTime() - dateB.getTime();
            } else {
                return 0;
            }
        })
        setFilterData(sortData);
    }
    const searchFilter = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        const filterData = data.filter((item) => item.store.toLowerCase().includes(value));
        setFilterData(filterData);
    }


    return(
        <>
        <div className='flex gap-5 items-center my-3'>
          <Select onChange={handleTime} value={selectedOption} className='flex-1' options={options} styles={customStyles} />
          <Select onChange={handleStatus} value={selectStatus} className='flex-1' placeholder="Select Status" options={status} styles={customStyles} />
          <Select onChange={handleOrder} value={selectOrder} className='flex-1' placeholder="Sort By" options={sort} styles={customStyles} />
            <input
                type="text"
                placeholder="Search..."
                className="p-[11px] border border-[#888888] w-full rounded-full flex-2"
                value={searchTerm}
                onChange={searchFilter}
            />
        </div>

        {/* Table */}

        <div className="overflow-auto w-full">
          <table className="w-full text-left">
              <thead className="bg-[#F6F6F6] h-[52px]">
                <tr>
                    {columns.map((col) => (
                        <th key={col.key} className="p-4 text-nowrap text-sm font-semibold text-[#3D3D3D] capitalize border-b border-[#B0B0B0] first:rounded-l-sm last:rounded-r-sm">
                            {col.header}
                        </th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {filterData.map((row, i) => (
                    <tr key={i} className="border-b border-[#B0B0B0]">
                        {columns.map((col) => (
                            <td key={col.key} className="text-nowrap h-[84px] px-4 text-base font-semibold text-[#3D3D3D]">
                                { col.render ? col.render(row) : row[col.key] }
                            </td>
                        ))}
                    </tr>
                ))}
              </tbody>
          </table>
        </div>
        </>
    )
}

export default Table;