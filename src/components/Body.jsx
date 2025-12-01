import Card from "./Card";

function Body() {
    
    
    return (
        <>
            <div className="h-5/6 w-full flex justify-center border-2 border-blue-600">
                <div className="h-full w-11/12 m-10 flex flex-wrap justify-around border-2 border-red-600">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />

                    {/* <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card /> */}
                </div>
            </div>
        </>
    ) 
}

export default Body;