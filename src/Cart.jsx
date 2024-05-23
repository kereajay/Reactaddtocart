import React, { useReducer, useState } from 'react'



function Cart() {
    // const [total, setTotal] = useState(0)
    const reucerfn = (state, action) => {
        switch (action.type) {
            case "increment1":
                return { ...state, count: state.count + 1, total: state.total + 100 }
            case "increment2":
                return { ...state, count2: state.count2 + 1, total: state.total + 200 }
            case "increment3":
                return { ...state, count3: state.count3 + 1, total: state.total + 300 }
            case "decrement1":
                return { ...state, count: state.count - 1, total: state.total - 100 }
            case "decrement2":
                return { ...state, count2: state.count2 - 1, total: state.total - 200 }
            case "decrement3":
                return { ...state, count3: state.count3 - 1, total: state.total - 300 }
            default:
                return state;
        }

    }
    const [state, dispatch] = useReducer(reucerfn, { count: 0, count2: 0, count3: 0, total: 0 })

    const handlequantity = () => {
        dispatch({ type: "increment1" })
    }
    const handlequantity2 = () => {
        dispatch({ type: "increment2" })
    }
    const handlequantity3 = () => {
        dispatch({ type: "increment3" })
    }

    const decrement1 = () => {
        dispatch({ type: "decrement1" })
    }
    const decrement2 = () => {
        dispatch({ type: "decrement2" })
    }
    const decrement3 = () => {
        dispatch({ type: "decrement3" })
    }

    return (
        <div>

            <div className='grid lg:grid-cols-2 md:grid-cols-2 w-[60%] m-auto gap-8 mt-28'>
                <div id="left" className='border-2 border-black p-10'>
                    <div className='flex gap-8 bg-sky-400 p-4 items-center'>
                        <h1 className='text-xl font-semibold'>Product-1</h1>

                        <p className='text-xl'>100</p>
                        <div className='flex gap-7 text-lg bg-green-200 px-4 rounded-3xl '>

                            <button onClick={handlequantity}>+</button>
                            <p>{state.count}</p>
                            <button onClick={decrement1}>-</button>
                        </div>
                    </div>
                    <br />
                    <div className='flex gap-8 bg-sky-400 p-4'>
                        <h1 className='text-xl font-semibold'>Product-2</h1>

                        <p className='text-xl'>200</p>
                        <div className='flex gap-7 text-lg bg-green-200 px-4 rounded-3xl '>

                            <button onClick={handlequantity2}>+</button>
                            <p>{state.count2}</p>
                            <button onClick={decrement2}>-</button>
                        </div>
                    </div>
                    <br />
                    <div className='flex gap-8 bg-sky-400 p-4'>
                        <h1 className='text-xl font-semibold'>Product-3</h1>

                        <p className='text-xl'>300</p>
                        <div className='flex gap-7 text-lg bg-green-200 px-4 rounded-3xl '>

                            <button onClick={handlequantity3}>+</button>
                            <p>{state.count3}</p>
                            <button onClick={decrement3}>-</button>
                        </div>
                    </div>




                </div>


                <div id="right" className='border-2 border-black p-10'>

                    {state.count > 0 &&
                        <>
                            <div className="flex gap-8 bg-sky-400 py-3 px-8 text-xl font-semibold">

                                <h1 className=' '>Product-1: </h1>
                                <p>{state.count} X 100 ={state.count * 100}</p>
                            </div>
                            {/* <h1>Total- {state.count*100}</h1> */}
                        </>
                        // setTotal(state.count*100)



                    }
                    <br />
                    {state.count2 > 0 &&
                        <>
                            <div className="flex gap-8 bg-sky-400 py-3 px-8 text-xl font-semibold">


                                <h1 >Product-2:</h1>
                                <p>{state.count2} X 200 ={state.count2 * 200}</p>
                            </div>

                            {/* setTotal(state.count2*200) */}
                            {/* <h1>Total- {state.count2*200}</h1> */}
                        </>


                    }
                    <br />
                    {state.count3 > 0 &&
                        <>
                        <div className="flex gap-8 bg-sky-400 py-3 px-8 text-xl font-semibold">

                            <h1>Product-3:</h1>
                            <p>{state.count3} X 300 ={state.count2 * 300}</p>

                            {/* setTotal(state.count*100) */}
                        </div>
                        </>


                    }
                    <br />
                    {state.total > 0 &&
                        <div className='bg-sky-400 py-4'>

                            <h1 className='text-xl font-semibold text-center'>Total- {state.total}</h1>
                        </div>
                    }


                </div>
            </div>

        </div>
    )
}

export default Cart
