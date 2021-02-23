using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

//Models fra MongoDB
namespace retroApi.Models{
    public class Character {
        
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Image { get; set; }
        public string Name { get; set; }
        public int Year { get; set; }
        public string Description { get; set; }
    }
}