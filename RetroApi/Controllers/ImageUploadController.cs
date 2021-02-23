using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

//Egen controller for å laste opp bilder, etter Microsoft sine standard
namespace retroApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ImageUploadController : ControllerBase {

        //Deklarerer og initialiserer hosting
        private readonly IWebHostEnvironment _hosting;

        public ImageUploadController(IWebHostEnvironment hosting){
            _hosting = hosting;
        }

        [HttpGet]
        public string Get(){
            return "ImageUpload is running.";
        }

        [HttpPost]
        [Route("[action]")]
        public void UploadImage( IFormFile file ){
            string wwwrootPath = _hosting.WebRootPath;
            string absolutePath = Path.Combine( $"{wwwrootPath}/images/{file.FileName}" );
            //file.ContentType, Guid.getGuid()
            using(var fileStream = new FileStream(absolutePath, FileMode.Create)){
                file.CopyTo( fileStream );
            }
        }
    }
}