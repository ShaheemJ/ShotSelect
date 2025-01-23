package com.example.shot_select.PlayerShots;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/shotcharts")
public class PlayerShotsController {
    private final PlayerShotsService playerShotsService;

    @Autowired
    public PlayerShotsController(PlayerShotsService playerShotsService) {
        this.playerShotsService = playerShotsService;
    }

    @GetMapping
    public List<PlayerShots> getPlayerShots(
            @RequestParam(required = false) String name){
        if (name == null) {
            return playerShotsService.getPlayerShots();
        } else {
            return playerShotsService.getPlayerShotsFromName(name);
        }
    }

    @PostMapping
    public ResponseEntity<PlayerShots> addPlayerShots(@RequestBody PlayerShots playerShots) {
        PlayerShots createdShot = playerShotsService.addPlayerShots(playerShots);
        return new ResponseEntity<>(createdShot, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Integer> deletePlayerShots(@PathVariable Integer id) {
        playerShotsService.deletePlayerShots(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }
}
