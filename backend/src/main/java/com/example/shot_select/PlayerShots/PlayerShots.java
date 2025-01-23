package com.example.shot_select.PlayerShots;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "nba_shotcharts")
public class PlayerShots {
    @Id
    @Column(name = "id", nullable = false, unique = true)
    private Integer id;

    private String grid_type;
    private Integer game_id;
    private Integer game_event_id;
    private Integer player_id;
    private String playername;
    private Integer team_id;
    private String team_name;
    private Integer period;
    private Integer minutes_remaining;
    private Integer seconds_remaining;
    private String event_type;
    private String action_type;
    private String shot_type;
    private String shot_zone_basic;
    private String shot_zone_area;
    private String shot_zone_range;
    private Integer shot_distance;
    private Integer loc_x;
    private Integer loc_y;
    private Integer shot_attempted_flag;
    private Integer shot_made_flag;
    private Integer game_date;
    private String htm;
    private String vtm;

    public PlayerShots() {
    }

    public PlayerShots(Integer id, String grid_type, Integer game_id, Integer game_event_id, Integer player_id, String playername, Integer team_id, String team_name, Integer period, Integer minutes_remaining, Integer seconds_remaining, String event_type, String action_type, String shot_type, String shot_zone_basic, String shot_zone_area, String shot_zone_range, Integer shot_distance, Integer loc_x, Integer loc_y, Integer shot_attempted_flag, Integer shot_made_flag, Integer game_date, String htm, String vtm) {
        this.id = id;
        this.grid_type = grid_type;
        this.game_id = game_id;
        this.game_event_id = game_event_id;
        this.player_id = player_id;
        this.playername = playername;
        this.team_id = team_id;
        this.team_name = team_name;
        this.period = period;
        this.minutes_remaining = minutes_remaining;
        this.seconds_remaining = seconds_remaining;
        this.event_type = event_type;
        this.action_type = action_type;
        this.shot_type = shot_type;
        this.shot_zone_basic = shot_zone_basic;
        this.shot_zone_area = shot_zone_area;
        this.shot_zone_range = shot_zone_range;
        this.shot_distance = shot_distance;
        this.loc_x = loc_x;
        this.loc_y = loc_y;
        this.shot_attempted_flag = shot_attempted_flag;
        this.shot_made_flag = shot_made_flag;
        this.game_date = game_date;
        this.htm = htm;
        this.vtm = vtm;
    }

    public PlayerShots(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getGrid_type() {
        return grid_type;
    }

    public void setGrid_type(String grid_type) {
        this.grid_type = grid_type;
    }

    public Integer getGame_id() {
        return game_id;
    }

    public void setGame_id(Integer game_id) {
        this.game_id = game_id;
    }

    public Integer getGame_event_id() {
        return game_event_id;
    }

    public void setGame_event_id(Integer game_event_id) {
        this.game_event_id = game_event_id;
    }

    public Integer getPlayer_id() {
        return player_id;
    }

    public void setPlayer_id(Integer player_id) {
        this.player_id = player_id;
    }

    public String getPlayername() {
        return playername;
    }

    public void setPlayername(String playername) {
        this.playername = playername;
    }

    public Integer getTeam_id() {
        return team_id;
    }

    public void setTeam_id(Integer team_id) {
        this.team_id = team_id;
    }

    public String getTeam_name() {
        return team_name;
    }

    public void setTeam_name(String team_name) {
        this.team_name = team_name;
    }

    public Integer getPeriod() {
        return period;
    }

    public void setPeriod(Integer period) {
        this.period = period;
    }

    public Integer getMinutes_remaining() {
        return minutes_remaining;
    }

    public void setMinutes_remaining(Integer minutes_remaining) {
        this.minutes_remaining = minutes_remaining;
    }

    public Integer getSeconds_remaining() {
        return seconds_remaining;
    }

    public void setSeconds_remaining(Integer seconds_remaining) {
        this.seconds_remaining = seconds_remaining;
    }

    public String getEvent_type() {
        return event_type;
    }

    public void setEvent_type(String event_type) {
        this.event_type = event_type;
    }

    public String getAction_type() {
        return action_type;
    }

    public void setAction_type(String action_type) {
        this.action_type = action_type;
    }

    public String getShot_type() {
        return shot_type;
    }

    public void setShot_type(String shot_type) {
        this.shot_type = shot_type;
    }

    public String getShot_zone_basic() {
        return shot_zone_basic;
    }

    public void setShot_zone_basic(String shot_zone_basic) {
        this.shot_zone_basic = shot_zone_basic;
    }

    public String getShot_zone_area() {
        return shot_zone_area;
    }

    public void setShot_zone_area(String shot_zone_area) {
        this.shot_zone_area = shot_zone_area;
    }

    public String getShot_zone_range() {
        return shot_zone_range;
    }

    public void setShot_zone_range(String shot_zone_range) {
        this.shot_zone_range = shot_zone_range;
    }

    public Integer getShot_distance() {
        return shot_distance;
    }

    public void setShot_distance(Integer shot_distance) {
        this.shot_distance = shot_distance;
    }

    public Integer getLoc_x() {
        return loc_x;
    }

    public void setLoc_x(Integer loc_x) {
        this.loc_x = loc_x;
    }

    public Integer getLoc_y() {
        return loc_y;
    }

    public void setLoc_y(Integer loc_y) {
        this.loc_y = loc_y;
    }

    public Integer getShot_attempted_flag() {
        return shot_attempted_flag;
    }

    public void setShot_attempted_flag(Integer shot_attempted_flag) {
        this.shot_attempted_flag = shot_attempted_flag;
    }

    public Integer getShot_made_flag() {
        return shot_made_flag;
    }

    public void setShot_made_flag(Integer shot_made_flag) {
        this.shot_made_flag = shot_made_flag;
    }

    public Integer getGame_date() {
        return game_date;
    }

    public void setGame_date(Integer game_date) {
        this.game_date = game_date;
    }

    public String getHtm() {
        return htm;
    }

    public void setHtm(String htm) {
        this.htm = htm;
    }

    public String getVtm() {
        return vtm;
    }

    public void setVtm(String vtm) {
        this.vtm = vtm;
    }
}
