namespace BLL;
using BOL;
using DAL;
public class UserManager{
    public List<User> GetAllUsers(){ 
        DBManager dbm = new DBManager();
        return dbm.GetAllUsers();
    }
}