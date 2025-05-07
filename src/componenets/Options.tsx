import React from 'react'

const Options = () => {
    type FoodProps = {
        food: string,
        options: string
    }
    const Food = ({food, options = ""}: FoodProps) => {
        return (
            <div className={`bg-[url('https://images.immediate.co.uk/production/volatile/sites/30/2013/05/spaghetti-carbonara-382837d.jpg?resize=768,574')] bg-cover bg-center h-50 w-40 rounded-xl mt-10`}>
            <div className='relative'>
                <p className=' absolute top-35 left-2 text-[#FC8A06] font-bold mt-5  text-sm'>{options}</p>
                <h3 className='absolute top-45 left-2 text-white font-bold mt '>{food}</h3>
            </div>
        </div>
        )
       
    }

  return (
    <div className='flex justify-center items-center'>
        <div className='flex w-[90rem] justify-between items-center'>
            <Food food={'Burgers'} options={'23 Restaurants'}/>
            <Food food={'Burgers'} options={'23 Restaurants'}/>
            <Food food={'Burgers'} options={'23 Restaurants'}/>
            <Food food={'Burgers'} options={'23 Restaurants'}/>
            <Food food={'Burgers'} options={'23 Restaurants'}/>
            <Food food={'Burgers'} options={'23 Restaurants'}/>
            
        </div>
      
    </div>
  )
}

export default Options
