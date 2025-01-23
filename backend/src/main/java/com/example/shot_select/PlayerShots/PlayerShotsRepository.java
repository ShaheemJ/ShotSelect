package com.example.shot_select.PlayerShots;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface PlayerShotsRepository extends JpaRepository<PlayerShots, Integer> {
    void deleteById(Integer id);

    List<PlayerShots> findByPlayernameContainingIgnoreCase(String playername);
}
