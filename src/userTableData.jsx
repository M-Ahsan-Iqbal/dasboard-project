import Button from "./components/Button";

export const columns = [
    {header: 'Store', key: 'store',
        render: (row) => {
            const name = row.store;
            const space = name.replace(/^(\d+)([a-zA-Z])/, '$1\u00A0\u00A0\u00A0\u00A0$2');
            return (
                <>
            <span className={`${row.status === "completed" ? "line-through": ""}`}>{space}</span>
            <p className="text-sm text-wrap font-medium text-[#575757]">{row.description}</p>
            </>
            );
        }
    },

    {header: 'Status',
     key: 'status',
     render: (row) => (
            <div className={`rounded-full w-[100px] h-[26px] text-xs font-semibold 
            capitalize flex justify-center items-center ${row.status === "completed" ? "bg-[#34C75933] text-[#009225]" : "bg-[#FFCC0033] text-[#7C6300]"}`}>
            {row.status}
        </div>
     )
    },

    {header: 'Order Taken?',
     key: 'order',
     render: (row) => (
        <span className={`${row.order === "No" ? "text-red-600" : ""}`}>{row.order}</span>
     )
    },
    {header: 'Visit Time', key: 'time'},
    {header: 'Date', key: 'date'},
    {header: '',
     key: 'detail',
     render: (row) => (
        <button className={`w-[86px] cursor-pointer h-[36px] rounded-full text-[13px] text-white font-semibold px-3 capitalize
        ${row.detail === "details" ? "bg-[#FFAD65]" : "bg-[#E96E6D]"}`}>
            {row.detail}
        </button>
     )
     },
];


export const data = [
    { store: '01Chase Up', description: '', status: 'completed', order: 'yes', time: '10:12 AM', date: "2025-4-24", detail: 'details'},
    { store: '02Chase Value', description: '3.2 km away, Not eligible to check in', status: 'completed', order: 'No', time: '12:12 AM', date: "2025-4-21", detail: 'details'},
    { store: '03Ideal Mall', description: '2.2 km away, Not eligible to check in', status: 'pending', order: '--', time: '10:12 AM', date: "2025-4-17", detail: 'check in'},
    { store: '03Food Festival', description: '0.2km away eligible to check in', status: 'pending', order: '--', time: '10:12 AM', date: "2025-4-16", detail: 'check in'},
]