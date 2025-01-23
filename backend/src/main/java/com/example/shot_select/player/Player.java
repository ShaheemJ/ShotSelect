package com.example.shot_select.player;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="nba_2025_stats")
public class Player {
    @Id
    @Column(name = "playerid", nullable = false, unique = true)
    private String playerid;

    private String player;

    private Integer age;

    private String team;

    private String pos;

    private Integer g;

    private Integer gs;

    private Double mp;

    private Double fg;

    private Double fga;

    private Double fg_percent;

    private Double threep;

    private Double threepa;

    private Double threep_percent;

    private Double twop;

    private Double twopa;

    private Double twop_percent;

    private Double efg_percent;

    private Double ft;

    private Double fta;

    private Double ft_percent;

    private Double orb;

    private Double drb;

    private Double trb;

    private Double ast;

    private Double stl;

    private Double blk;

    private Double tov;

    private Double pf;

    private Double pts;

    public Player() {
    }

    public Player(String playerid, String player, Integer age, String team, String pos, Integer g, Integer gs, Double mp, Double fg, Double fga, Double fg_percent, Double threep, Double threepa, Double threep_percent, Double twop, Double twopa, Double twop_percent, Double efg_percent, Double ft, Double fta, Double ft_percent, Double orb, Double drb, Double trb, Double ast, Double stl, Double blk, Double tov, Double pf, Double pts) {
        this.playerid = playerid;
        this.player = player;
        this.age = age;
        this.team = team;
        this.pos = pos;
        this.g = g;
        this.gs = gs;
        this.mp = mp;
        this.fg = fg;
        this.fga = fga;
        this.fg_percent = fg_percent;
        this.threep = threep;
        this.threepa = threepa;
        this.threep_percent = threep_percent;
        this.twop = twop;
        this.twopa = twopa;
        this.twop_percent = twop_percent;
        this.efg_percent = efg_percent;
        this.ft = ft;
        this.fta = fta;
        this.ft_percent = ft_percent;
        this.orb = orb;
        this.drb = drb;
        this.trb = trb;
        this.ast = ast;
        this.stl = stl;
        this.blk = blk;
        this.tov = tov;
        this.pf = pf;
        this.pts = pts;
    }

    public Player(String playerid, String player) {
        this.playerid = playerid;
        this.player = player;
    }

    public String getPlayerid() {
        return playerid;
    }

    public void setPlayerid(String playerid) {
        this.playerid = playerid;
    }

    public String getPlayer() {
        return player;
    }

    public void setPlayer(String player) {
        this.player = player;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getTeam() {
        return team;
    }

    public void setTeam(String team) {
        this.team = team;
    }

    public String getPos() {
        return pos;
    }

    public void setPos(String pos) {
        this.pos = pos;
    }

    public Integer getG() {
        return g;
    }

    public void setG(Integer g) {
        this.g = g;
    }

    public Integer getGs() {
        return gs;
    }

    public void setGs(Integer gs) {
        this.gs = gs;
    }

    public Double getMp() {
        return mp;
    }

    public void setMp(Double mp) {
        this.mp = mp;
    }

    public Double getFg() {
        return fg;
    }

    public void setFg(Double fg) {
        this.fg = fg;
    }

    public Double getFga() {
        return fga;
    }

    public void setFga(Double fga) {
        this.fga = fga;
    }

    public Double getFg_percent() {
        return fg_percent;
    }

    public void setFg_percent(Double fg_percent) {
        this.fg_percent = fg_percent;
    }

    public Double getThreep() {
        return threep;
    }

    public void setThreep(Double threep) {
        this.threep = threep;
    }

    public Double getThreepa() {
        return threepa;
    }

    public void setThreepa(Double threepa) {
        this.threepa = threepa;
    }

    public Double getThreep_percent() {
        return threep_percent;
    }

    public void setThreep_percent(Double threep_percent) {
        this.threep_percent = threep_percent;
    }

    public Double getTwop() {
        return twop;
    }

    public void setTwop(Double twop) {
        this.twop = twop;
    }

    public Double getTwopa() {
        return twopa;
    }

    public void setTwopa(Double twopa) {
        this.twopa = twopa;
    }

    public Double getTwop_percent() {
        return twop_percent;
    }

    public void setTwop_percent(Double twop_percent) {
        this.twop_percent = twop_percent;
    }

    public Double getEfg_percent() {
        return efg_percent;
    }

    public void setEfg_percent(Double efg_percent) {
        this.efg_percent = efg_percent;
    }

    public Double getFt() {
        return ft;
    }

    public void setFt(Double ft) {
        this.ft = ft;
    }

    public Double getFta() {
        return fta;
    }

    public void setFta(Double fta) {
        this.fta = fta;
    }

    public Double getFt_percent() {
        return ft_percent;
    }

    public void setFt_percent(Double ft_percent) {
        this.ft_percent = ft_percent;
    }

    public Double getOrb() {
        return orb;
    }

    public void setOrb(Double orb) {
        this.orb = orb;
    }

    public Double getDrb() {
        return drb;
    }

    public void setDrb(Double drb) {
        this.drb = drb;
    }

    public Double getTrb() {
        return trb;
    }

    public void setTrb(Double trb) {
        this.trb = trb;
    }

    public Double getAst() {
        return ast;
    }

    public void setAst(Double ast) {
        this.ast = ast;
    }

    public Double getStl() {
        return stl;
    }

    public void setStl(Double stl) {
        this.stl = stl;
    }

    public Double getBlk() {
        return blk;
    }

    public void setBlk(Double blk) {
        this.blk = blk;
    }

    public Double getTov() {
        return tov;
    }

    public void setTov(Double tov) {
        this.tov = tov;
    }

    public Double getPf() {
        return pf;
    }

    public void setPf(Double pf) {
        this.pf = pf;
    }

    public Double getPts() {
        return pts;
    }

    public void setPts(Double pts) {
        this.pts = pts;
    }
}
