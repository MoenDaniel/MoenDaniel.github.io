using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using retroApi.Models;
using retroApi.Sevices;

namespace retroApi.Controllers{

    [ApiController]
    [Route("[controller]")]
    public class CharactersController : ControllerBase {
        private readonly CharacterService _characterService;

        public CharactersController(CharacterService characterService){
            _characterService = characterService;
        }

        [HttpGet]
        public ActionResult<List<Character>> Get(){
            return _characterService.Get();
        }
    }
}