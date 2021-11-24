const baseUrl = 'http://localhost:3000';

const path={
    users:"./users",
    comments:"./comments"
}

const getUser = async () =>{
    data = await fetch(`${baseUrl}${path.users}`)
};