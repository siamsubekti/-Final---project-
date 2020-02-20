package com.enigma.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
//import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "roles")
public class Roles{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "role_name")
    private String roleName;

    @JsonIgnore
    @ManyToMany(mappedBy = "roles")
    List<User> userRoleList;

//    @JsonIgnore
//    @OneToMany(mappedBy = "roles")
//    List<User> userRoleList;

    public Roles() {
    }

    public Roles(String roleName) {
        this.roleName = roleName;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public List<User> getUserRoleList() {
        return userRoleList;
    }

    public void setUserRoleList(List<User> userRoleList) {
        this.userRoleList = userRoleList;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Roles roles = (Roles) o;
        return Objects.equals(id, roles.id) &&
                Objects.equals(roleName, roles.roleName) &&
                Objects.equals(userRoleList, roles.userRoleList);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, roleName, userRoleList);
    }
}
