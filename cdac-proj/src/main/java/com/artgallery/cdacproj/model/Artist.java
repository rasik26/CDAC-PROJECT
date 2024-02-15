<<<<<<< HEAD
package com.artgallery.cdacproj.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class Artist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToOne
    private User user;

    public Artist() {
    }

    public Artist(User user) {
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Artist [id=" + id + ", user=" + user + "]";
    }
}
=======
package com.artgallery.cdacproj.model;

public class Artist {
	User u;
	private int id;
	
	
	@Override
	public String toString() {
		return "Artist [u=" + u + ", id=" + id + "]";
	}
	public Artist() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Artist(User u, int id) {
		super();
		this.u = u;
		this.id = id;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public User getU() {
		return u;
	}
	public void setU(User u) {
		this.u = u;
	}
	
	
}
>>>>>>> c7eebf0af18954d749c2173ff3978f455b034984
