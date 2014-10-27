var facebookUrl = "http://www.facebook.com/gdiboulder";
var meetupUrl = "http://www.meetup.com/Girl-Develop-It-Boulder";
var twitterUrl = "http://www.twitter.com/gdiboulder";
var mailto = "mailto:boulder@girldevelopit.com";

gdiBase = {
  title: "GDI Boulder",
  orgName: "GDI Boulder",
  twitterUrl: twitterUrl,
  facebookUrl: facebookUrl,
  meetupUrl: meetupUrl,
  navLinks: [
    { title: "Parent Org", url: "http://girldevelopit.com/" },
    { title: "Meetup", url: meetupUrl },
    { title: "About Us", url: "http://girldevelopit.com/chapters/boulder" },
  ],
  contactAltPrefix: "Boulder / Denver GDI",
  contactInfo: [
    { title: "Join our meetup and take classes!", url: meetupUrl, class: "meetup" },
    { title: "Contact Us!", url: mailto, icon: "/image/email-icon.png", class: "email" },
    { title: "Follow us on Twitter", url: twitterUrl, icon: "/image/twitter.png", class: "twitter" },
    { title: "Like us on Facebook", url: facebookUrl, icon: "/image/facebook.png", class: "facebook" },
  ]
};