const food=
{
    foodName: String,
    description: String,
    URL: String,
    rank: Number
};

const toSubmit = document.getElementById("submitButton");

toSubmit.addEventListener("click",onSubmit);

function onSubmit()
{
    //get the elements
    const foodName= document.getElementById("foodName");
    const description= document.getElementById("description");
    const imgURL= document.getElementById("imgURL");
    const rank= document.getElementById("rank");
    
    //check if all fields are not empty and rank is a number
    if (foodName==="" && description==="" && imgURL==="" && isNaN(rank))
    {
        alert("All field names must be present and Rank should be a number");
        return;
    }

    const foodCard= document.createElement()
    //check which foodCard to input
    if (rank === 1)
    {
        console.log("this is 1")
    }
    
}

const toDelete = document.getElementByClassName("deleteButton");
toDelete.addEventListener("click",onSubmit);

function onDelete()
{
    
}