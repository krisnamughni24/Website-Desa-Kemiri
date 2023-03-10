google.maps.__gjsload__("overlay", function (_) {
  var Pw = function (a) {
      this.h = a;
    },
    sna = function () {},
    Qw = function (a) {
      a.Uo = a.Uo || new sna();
      return a.Uo;
    },
    tna = function (a) {
      this.Ea = new _.Gi(function () {
        var b = a.Uo;
        if (a.getPanes()) {
          if (a.getProjection()) {
            if (!b.Jn && a.onAdd) a.onAdd();
            b.Jn = !0;
            a.draw();
          }
        } else {
          if (b.Jn)
            if (a.onRemove) a.onRemove();
            else a.remove();
          b.Jn = !1;
        }
      }, 0);
    },
    una = function (a, b) {
      function c() {
        return _.Hi(e.Ea);
      }
      var d = Qw(a),
        e = d.zm;
      e || (e = d.zm = new tna(a));
      _.kb(d.Ra || [], _.vf);
      var f = (d.Za = d.Za || new _.Wu()),
        g = b.__gm;
      f.bindTo("zoom", g);
      f.bindTo("offset", g);
      f.bindTo("center", g, "projectionCenterQ");
      f.bindTo("projection", b);
      f.bindTo("projectionTopLeft", g);
      f = d.mt = d.mt || new Pw(f);
      f.bindTo("zoom", g);
      f.bindTo("offset", g);
      f.bindTo("projection", b);
      f.bindTo("projectionTopLeft", g);
      a.bindTo("projection", f, "outProjection");
      a.bindTo("panes", g);
      d.Ra = [
        _.L(a, "panes_changed", c),
        _.L(g, "zoom_changed", c),
        _.L(g, "offset_changed", c),
        _.L(b, "projection_changed", c),
        _.L(g, "projectioncenterq_changed", c),
      ];
      c();
      b instanceof _.Uf && (_.R(b, "Ox"), _.P(b, 148440));
    },
    yna = function (a) {
      if (a) {
        var b = a.getMap();
        if (vna(a) !== b && b && b instanceof _.Uf) {
          var c = b.__gm;
          c.overlayLayer
            ? (a.__gmop = new wna(b, a, c.overlayLayer))
            : c.h.then(function (d) {
                d = d.va;
                var e = new Rw(b, d);
                d.Bb(e);
                c.overlayLayer = e;
                xna(a);
                yna(a);
              });
        }
      }
    },
    xna = function (a) {
      if (a) {
        var b = a.__gmop;
        b &&
          ((a.__gmop = null),
          b.h.unbindAll(),
          b.h.set("panes", null),
          b.h.set("projection", null),
          b.m.Wd(b),
          b.j && ((b.j = !1), b.h.onRemove ? b.h.onRemove() : b.h.remove()));
      }
    },
    vna = function (a) {
      return (a = a.__gmop) ? a.map : null;
    },
    wna = function (a, b, c) {
      this.map = a;
      this.h = b;
      this.m = c;
      this.j = !1;
      _.R(this.map, "Ox");
      _.P(this.map, 148440);
      c.Hd(this);
    },
    zna = function (a, b) {
      a.h.get("projection") != b &&
        (a.h.bindTo("panes", a.map.__gm), a.h.set("projection", b));
    },
    Rw = function (a, b) {
      this.C = a;
      this.m = b;
      this.h = null;
      this.j = [];
    };
  _.Sa(Pw, _.O);
  Pw.prototype.changed = function (a) {
    "outProjection" != a &&
      ((a = !!(
        this.get("offset") &&
        this.get("projectionTopLeft") &&
        this.get("projection") &&
        _.ee(this.get("zoom"))
      )),
      a == !this.get("outProjection") &&
        this.set("outProjection", a ? this.h : null));
  };
  var Sw = {};
  _.Sa(tna, _.O);
  Sw.Hd = function (a) {
    if (a) {
      var b = a.getMap();
      (Qw(a).Rs || null) !== b && (b && una(a, b), (Qw(a).Rs = b));
    }
  };
  Sw.Wd = function (a) {
    var b = Qw(a),
      c = b.Za;
    c && c.unbindAll();
    (c = b.mt) && c.unbindAll();
    a.unbindAll();
    a.set("panes", null);
    a.set("projection", null);
    b.Ra && _.kb(b.Ra, _.vf);
    b.Ra = null;
    b.zm && (b.zm.Ea.Gc(), (b.zm = null));
    delete Qw(a).Rs;
  };
  var Tw = {};
  wna.prototype.draw = function () {
    this.j || ((this.j = !0), this.h.onAdd && this.h.onAdd());
    this.h.draw && this.h.draw();
  };
  Rw.prototype.dispose = function () {};
  Rw.prototype.Hb = function (a, b, c, d, e, f, g, h) {
    var k = (this.h = this.h || new _.nq(this.C, this.m, function () {}));
    k.Hb(a, b, c, d, e, f, g, h);
    a = _.A(this.j);
    for (b = a.next(); !b.done; b = a.next())
      (b = b.value), zna(b, k), b.draw();
  };
  Rw.prototype.Hd = function (a) {
    this.j.push(a);
    this.h && zna(a, this.h);
    this.m.refresh();
  };
  Rw.prototype.Wd = function (a) {
    _.ob(this.j, a);
  };
  Tw.Hd = yna;
  Tw.Wd = xna;
  _.of("overlay", {
    vq: function (a) {
      if (a) {
        (0, Sw.Wd)(a);
        (0, Tw.Wd)(a);
        var b = a.getMap();
        b && (b instanceof _.Uf ? (0, Tw.Hd)(a) : (0, Sw.Hd)(a));
      }
    },
    preventMapHitsFrom: function (a) {
      _.Rq(a, {
        Sd: function (b) {
          _.Gm(b.event.La);
        },
        vc: function (b) {
          return _.uq(b);
        },
        oh: function (b) {
          return _.vq(b);
        },
        Zc: function (b) {
          return _.vq(b);
        },
        zc: function (b) {
          return _.wq(b);
        },
      }).zi(!0);
    },
    preventMapHitsAndGesturesFrom: function (a) {
      a.addEventListener("click", _.sf);
      a.addEventListener("contextmenu", _.sf);
      a.addEventListener("dblclick", _.sf);
      a.addEventListener("mousedown", _.sf);
      a.addEventListener("mousemove", _.sf);
      a.addEventListener("MSPointerDown", _.sf);
      a.addEventListener("pointerdown", _.sf);
      a.addEventListener("touchstart", _.sf);
      a.addEventListener("wheel", _.sf);
    },
  });
});
