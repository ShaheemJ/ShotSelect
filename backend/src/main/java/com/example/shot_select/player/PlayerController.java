package com.example.shot_select.player;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/player")
@CrossOrigin(origins = {"https://shot-select.vercel.app", "http://localhost:3000"})
class PlayerController {

    private final PlayerService playerService;

    @Autowired
    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @GetMapping
    public List<Player> getPlayers(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String team,
            @RequestParam(required = false) String position,
            @RequestParam(required = false) Integer age) {

        if(team != null && position != null) {
            return playerService.getPlayersByTeamAndPosition(team, position);
        }
        else if(team != null) {
            return playerService.getPlayersFromTeam(team);
        }
        else if(name != null) {
            return playerService.getPlayersByName(name);
        }
        else if(position != null) {
            return playerService.getPlayersByPosition(position);
        }
        else if(age != null) {
            return playerService.getPlayersByAge(age);
        } else {
            return playerService.getPlayers();
        }
    }

    @PostMapping
    public ResponseEntity<Player> addPlayer(@RequestBody Player player){
        Player newPlayer = playerService.addPlayer(player);
        return new ResponseEntity<>(newPlayer, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Player> updatePlayer(@RequestBody Player player){
        Player updatedPlayer = playerService.updatePlayer(player);
        if(updatedPlayer != null) {
            return new ResponseEntity<>(updatedPlayer, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{playerName}")
    public ResponseEntity<String> deletePlayer(@PathVariable String playerName) {
        playerService.deletePlayer(playerName);
        return new ResponseEntity<>("Player deleted successfully", HttpStatus.OK);
    }
}
