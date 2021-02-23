using retroApi.Models;
using retroApi.Services;

using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace retroApi.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class GamesController : ControllerBase {
        private readonly GameService _gameService;

        public GamesController(GameService gameService){
            _gameService = gameService;
        }

        [HttpGet]
        public ActionResult<List<Game>> Get(){
            return _gameService.Get();
        }

    }

}