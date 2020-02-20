package com.enigma.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "transactions")
public class Transactions {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    private String id;

    @Column(name = "total_price")
    private BigDecimal totalPrice;

    @Column(name = "origin_name")
    private String originName;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "destination_name")
    private String destinationName;

    @Column
    private String status;

    @Temporal(TemporalType.DATE)
    @DateTimeFormat(pattern = " HH:mm:ss yyyy-MM-dd")
    @Column(name = "create_time")
    private Date createTime;

    @ManyToOne
    @JoinColumn(name = "operator_id")
    private User operator;

    @JsonIgnore
    @OneToMany(mappedBy = "listTransactions", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<Track> tracking;

    @ManyToOne
    @JoinColumn(name = "packages_id")
    private Packages packages;

    @ManyToOne
    @JoinColumn(name = "addresses_origin")
    private Addresses originAddress;

    @ManyToOne
    @JoinColumn(name = "addresses_destination")
    private Addresses destinationAddresses;

    public Transactions() {
    }

    public Transactions(BigDecimal totalPrice, String originName, String destinationName, String email,String status, Date createTime) {
        this.totalPrice = totalPrice;
        this.originName = originName;
        this.destinationName = destinationName;
        this.email = email;
        this.status = status;
        this.createTime = createTime;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public BigDecimal getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(BigDecimal totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getOriginName() {
        return originName;
    }

    public void setOriginName(String originName) {
        this.originName = originName;
    }

    public String getDestinationName() {
        return destinationName;
    }

    public void setDestinationName(String destinationName) {
        this.destinationName = destinationName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public User getOperator() {
        return operator;
    }

    public void setOperator(User operator) {
        this.operator = operator;
    }

    public List<Track> getTracking() {
        return tracking;
    }

    public void setTracking(List<Track> tracking) {
        this.tracking = tracking;
    }

    public Packages getPackages() {
        return packages;
    }

    public void setPackages(Packages packages) {
        this.packages = packages;
    }

    public Addresses getOriginAddress() {
        return originAddress;
    }

    public void setOriginAddress(Addresses originAddress) {
        this.originAddress = originAddress;
    }

    public Addresses getDestinationAddresses() {
        return destinationAddresses;
    }

    public void setDestinationAddresses(Addresses destinationAddresses) {
        this.destinationAddresses = destinationAddresses;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Transactions that = (Transactions) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(totalPrice, that.totalPrice) &&
                Objects.equals(originName, that.originName) &&
                Objects.equals(email, that.email) &&
                Objects.equals(destinationName, that.destinationName) &&
                Objects.equals(status, that.status) &&
                Objects.equals(createTime, that.createTime) &&
                Objects.equals(operator, that.operator) &&
                Objects.equals(tracking, that.tracking) &&
                Objects.equals(packages, that.packages) &&
                Objects.equals(originAddress, that.originAddress) &&
                Objects.equals(destinationAddresses, that.destinationAddresses);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, totalPrice, originName, email, destinationName, status, createTime, operator, tracking, packages, originAddress, destinationAddresses);
    }
}
