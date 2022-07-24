import UserResults from "../users/UserResults"
import UserSearch from "../users/UserSearch"

const Home = () => {
    return (
        <div className="px-2">
            <UserSearch />
            <UserResults />
        </div>
    );
}
 
export default Home;