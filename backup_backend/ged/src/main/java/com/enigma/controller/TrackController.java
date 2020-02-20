package com.enigma.controller;

import com.enigma.entities.Track;
import com.enigma.services.TrackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class TrackController {

    @Autowired
    TrackService trackService;

    @PostMapping("/track")
    public Track createTracking(@RequestBody Track track) throws Exception {
        return trackService.updateTracking(track);

    }

    @GetMapping("/track")
    public List<Track> getAllTracking(){
        return trackService.getAllTracking();
    }

    @GetMapping("/track/{id}")
    public Track getTrackingById(@PathVariable String id){
        return trackService.getTrackingById(id);
    }

    @PutMapping("/track")
    public Track updateTracking(@RequestBody Track track) throws Exception {
        return trackService.updateTracking(track);
    }

    @DeleteMapping("/track/{id}")
    public void deleteTrackingById(@PathVariable String id){
        trackService.deleteTrackingById(id);
    }

}
