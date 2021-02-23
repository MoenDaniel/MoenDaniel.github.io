namespace retroApi.Models{

    //Lager getters og setters
    public class RetroGamesDatabaseSettings : IRetroGamesDatabaseSettings{
        public string GamesCollectionName { get; set; }
        public string CharactersCollectionName { get; set; }
        public string CommentsCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
    
    public interface IRetroGamesDatabaseSettings{
        string GamesCollectionName { get; set; }
        string CharactersCollectionName { get; set; }
        string CommentsCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}