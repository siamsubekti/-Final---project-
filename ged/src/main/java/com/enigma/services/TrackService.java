package com.enigma.services;

import com.enigma.entities.Track;

import java.util.List;

public interface TrackService {
    Track updateTracking(Track track) throws Exception;
    List<Track> getAllTracking();
    Track getTrackingById(String id);
    void deleteTrackingById(String id);
    Track updatStatusStrack(Track track);
}
