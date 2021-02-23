using retroApi.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using retroApi.Sevices;

//Egen admin controller med Get, Post, Put og Delete fordi brukere ikke skal ha tilgang til Post, Put og Delete
namespace retroApi.Controllers
{
    // Route sier hvordan man skal få tak i kontrolleren.
    [ApiController]
    [Route("[controller]")]
    public class CharactersAdminController : ControllerBase {
        private readonly CharacterService _characterService;

        public CharactersAdminController(CharacterService characterService){
            _characterService = characterService;
        }
        //henter API-verdier
        [HttpGet]
        public ActionResult<List<Character>> Get(){
            return _characterService.Get();
        }
        //poster API-verdier
        [HttpPost]
        public ActionResult<Character> Post(Character character){
            _characterService.Create( character );
            return character;
        }
        //sletter API-verdier
        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id){
            var character = _characterService.Get( id );

            if( character == null){
                return NotFound();
            }

            _characterService.Remove( character.Id );
            return NoContent();
        }
        //overksriver API-verdier
        [HttpPut("{id:length(24)}")]
        public IActionResult Put(string id, Character characterIn){
            var selectedCharacter = _characterService.Get(id);

            if( selectedCharacter == null ){
                return NotFound();
            }

            _characterService.Update( id, characterIn );

            return NoContent();
        }

    }

}