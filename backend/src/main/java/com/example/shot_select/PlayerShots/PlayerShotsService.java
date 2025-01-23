package com.example.shot_select.PlayerShots;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
//import java.util.stream.Collectors;

@Component
public class PlayerShotsService {
    private final PlayerShotsRepository playerShotsRepository;

    @Autowired
    public PlayerShotsService(PlayerShotsRepository playerShotsRepository) {
        this.playerShotsRepository = playerShotsRepository;
    }

    public List<PlayerShots> getPlayerShots() {
        return playerShotsRepository.findAll();
    }

    public List<PlayerShots> getPlayerShotsFromName(String name) {
        return playerShotsRepository.findByPlayernameContainingIgnoreCase(name);
    }

    public PlayerShots addPlayerShots(PlayerShots playerShots) {
        playerShotsRepository.save(playerShots);
        return playerShots;
    }

    @Transactional
    public void deletePlayerShots(Integer shotid) {
        playerShotsRepository.deleteById(shotid);
    }
}
