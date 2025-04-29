

function Card({title, value, icon, className}){

      return(
          <>
          <div className="flex-1">
            <div class="flex justify-between items-center p-6 bg-[#F7F7F7] rounded-lg">
                <div>
                    <p className='text-h6 text-[#575757] capitalize'>{title}</p>
                    <p className='text-h1 mt-3 text-[#3D3D3D]'>{value}</p>
                </div>
                <div className='flex justify-center items-center rounded-full w-14 h-14 bg-primary'>
                    {icon}
                </div>
            </div>
            </div>
          </>
      )
  }
  
  export default Card;