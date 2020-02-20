package com.enigma.entities;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "tracking")
public class Track {

    @Id
    @Nullable
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    @Column(name = "id", nullable = true)
    private String id;

    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = " HH:mm:ss yyyy-MM-dd")
    private Date time;

    @ManyToOne
    @JoinColumn(name = "courier_id")
    private User users;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "transaction_id", referencedColumnName = "id")
    private Transactions listTransactions;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "storage_id", nullable = true)
    private Storages storage;

    @Column(name = "finish")
    private String finish;

    public Track() {
    }

    public Track(Date time) {
        this.time = time;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public User getUser() {
        return users;
    }

    public void setUser(User courier) {
        this.users = courier;
    }

    public Transactions getListTransactions() {
        return listTransactions;
    }

    public void setListTransactions(Transactions listTransactions) {
        this.listTransactions = listTransactions;
    }

    public Storages getStorage() {
        return storage;
    }

    public void setStorage(Storages storage) {
        this.storage = storage;
    }

    public String getFinish() {
        return finish;
    }

    public void setFinish(String finish) {
        this.finish = finish;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Track track = (Track) o;
        return Objects.equals(id, track.id) &&
                Objects.equals(time, track.time);
    }

}

