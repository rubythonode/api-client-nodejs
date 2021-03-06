// Generated by CoffeeScript 1.10.0
var Agents, BasicCrud, ButtonCode, CannedResponses, Chats, Goals, Greetings, Groups, LiveChatApi, OfflineMessages, Operators, PushPages, Reports, ReportsV1, Requester, Skills, Status, TrackingCode, Visitors, crypto, request,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

request = require('request');

crypto = require('crypto');

Requester = (function() {
  function Requester(user, apiKey, apiVersion, host) {
    this.user = user;
    this.apiKey = apiKey;
    this.apiVersion = apiVersion != null ? apiVersion : 2;
    this.host = host != null ? host : 'https://api.livechatinc.com/';
    this.del = bind(this.del, this);
    this.put = bind(this.put, this);
    this.post = bind(this.post, this);
    this.get = bind(this.get, this);
    this.request = request.defaults({
      auth: {
        user: this.user,
        password: this.apiKey
      },
      headers: {
        'X-API-Version': this.apiVersion
      }
    });
  }

  Requester.prototype.get = function(method, data, callback) {
    if (data == null) {
      data = {};
    }
    return this.request({
      url: this.host + method,
      qs: data
    }, (function(_this) {
      return function(error, response, body) {
        var error1;
        if (error != null) {
          return callback({
            error: error
          });
        } else {
          if (response.statusCode === 200) {
            try {
              return callback(JSON.parse(body));
            } catch (error1) {
              error = error1;
              return callback({
                error: error,
                body: body
              });
            }
          } else {
            return callback({
              error: body
            });
          }
        }
      };
    })(this));
  };

  Requester.prototype.post = function(method, data, callback) {
    if (data == null) {
      data = {};
    }
    return this.request.post({
      url: this.host + method,
      form: data
    }, (function(_this) {
      return function(error, response, body) {
        var error1;
        if (error != null) {
          return callback({
            error: error
          });
        } else {
          if (response.statusCode === 200) {
            try {
              return callback(JSON.parse(body));
            } catch (error1) {
              error = error1;
              return callback({
                error: error,
                body: body
              });
            }
          } else {
            return callback({
              error: body
            });
          }
        }
      };
    })(this));
  };

  Requester.prototype.put = function(method, data, callback) {
    if (data == null) {
      data = {};
    }
    return this.request.put({
      url: this.host + method,
      form: data
    }, (function(_this) {
      return function(error, response, body) {
        var error1;
        if (error != null) {
          return callback({
            error: error
          });
        } else {
          if (response.statusCode === 200) {
            try {
              return callback(JSON.parse(body));
            } catch (error1) {
              error = error1;
              return callback({
                error: error,
                body: body
              });
            }
          } else {
            return callback({
              error: body
            });
          }
        }
      };
    })(this));
  };

  Requester.prototype.del = function(method, data, callback) {
    if (data == null) {
      data = {};
    }
    return this.request.del({
      url: this.host + method,
      form: data
    }, (function(_this) {
      return function(error, response, body) {
        var error1;
        if (error != null) {
          return callback({
            error: error
          });
        } else {
          if (response.statusCode === 200) {
            try {
              return callback(JSON.parse(body));
            } catch (error1) {
              error = error1;
              return callback({
                error: error,
                body: body
              });
            }
          } else {
            return callback({
              error: body
            });
          }
        }
      };
    })(this));
  };

  return Requester;

})();

BasicCrud = (function() {
  function BasicCrud(api, path) {
    this.api = api;
    this.path = path;
    this["delete"] = bind(this["delete"], this);
    this.update = bind(this.update, this);
    this.create = bind(this.create, this);
    this.get = bind(this.get, this);
    this.list = bind(this.list, this);
  }

  BasicCrud.prototype.list = function(params, callback) {
    if (params == null) {
      params = {};
    }
    if (typeof params === 'function' && (callback == null)) {
      callback = params;
      params = {};
    }
    return this.api.get(this.path, params, (function(_this) {
      return function(response) {
        if (callback != null) {
          return callback(response);
        }
      };
    })(this));
  };

  BasicCrud.prototype.get = function(id, callback) {
    if (id == null) {
      id = '';
    }
    return this.api.get(this.path + '/' + id, {}, (function(_this) {
      return function(response) {
        if (callback != null) {
          return callback(response);
        }
      };
    })(this));
  };

  BasicCrud.prototype.create = function(params, callback) {
    if (params == null) {
      params = {};
    }
    if (typeof params === 'function' && (callback == null)) {
      callback = params;
      params = {};
    }
    return this.api.post(this.path, params, (function(_this) {
      return function(response) {
        if (callback != null) {
          return callback(response);
        }
      };
    })(this));
  };

  BasicCrud.prototype.update = function(id, params, callback) {
    if (id == null) {
      id = '';
    }
    if (params == null) {
      params = {};
    }
    if (typeof params === 'function' && (callback == null)) {
      callback = params;
      params = {};
    }
    return this.api.put(this.path + '/' + id, params, (function(_this) {
      return function(response) {
        if (callback != null) {
          return callback(response);
        }
      };
    })(this));
  };

  BasicCrud.prototype["delete"] = function(id, callback) {
    if (id == null) {
      id = '';
    }
    return this.api.del(this.path + '/' + id, {}, (function(_this) {
      return function(response) {
        if (callback != null) {
          return callback(response);
        }
      };
    })(this));
  };

  return BasicCrud;

})();

Agents = (function(superClass) {
  extend(Agents, superClass);

  function Agents(api) {
    this.api = api;
    this.resetApiKey = bind(this.resetApiKey, this);
    Agents.__super__.constructor.call(this, this.api, 'agents');
  }

  Agents.prototype.resetApiKey = function(id, callback) {
    if (id == null) {
      id = '';
    }
    return this.api.put('agents/' + id + '/reset_api_key', {}, (function(_this) {
      return function(response) {
        if (callback != null) {
          return callback(response);
        }
      };
    })(this));
  };

  return Agents;

})(BasicCrud);

Operators = (function(superClass) {
  extend(Operators, superClass);

  function Operators(api) {
    this.api = api;
    Operators.__super__.constructor.call(this, this.api, 'operators');
  }

  return Operators;

})(BasicCrud);

CannedResponses = (function(superClass) {
  extend(CannedResponses, superClass);

  function CannedResponses(api) {
    this.api = api;
    CannedResponses.__super__.constructor.call(this, this.api, 'canned_responses');
  }

  return CannedResponses;

})(BasicCrud);

Chats = (function(superClass) {
  extend(Chats, superClass);

  function Chats(api) {
    this.api = api;
    this.send = bind(this.send, this);
    Chats.__super__.constructor.call(this, this.api, 'chats');
    delete this.create;
    delete this.update;
    delete this["delete"];
  }

  Chats.prototype.send = function(id, params, callback) {
    if (params == null) {
      params = {};
    }
    if (typeof params === 'function' && (callback == null)) {
      callback = params;
      params = {};
    }
    return this.api.post('chats/' + id + '/send_transcript', params, (function(_this) {
      return function(response) {
        if (callback != null) {
          return callback(response);
        }
      };
    })(this));
  };

  return Chats;

})(BasicCrud);

Goals = (function(superClass) {
  extend(Goals, superClass);

  function Goals(api) {
    this.api = api;
    this.mark = bind(this.mark, this);
    Goals.__super__.constructor.call(this, this.api, 'goals');
  }

  Goals.prototype.mark = function(id, params, callback) {
    if (params == null) {
      params = {};
    }
    if (typeof params === 'function' && (callback == null)) {
      callback = params;
      params = {};
    }
    return this.api.post('goals/' + id + '/mark_as_successful', params, (function(_this) {
      return function(response) {
        if (callback != null) {
          return callback(response);
        }
      };
    })(this));
  };

  return Goals;

})(BasicCrud);

Greetings = (function(superClass) {
  extend(Greetings, superClass);

  function Greetings(api) {
    this.api = api;
    Greetings.__super__.constructor.call(this, this.api, 'greetings');
  }

  return Greetings;

})(BasicCrud);

Groups = (function(superClass) {
  extend(Groups, superClass);

  function Groups(api) {
    this.api = api;
    Groups.__super__.constructor.call(this, this.api, 'groups');
  }

  return Groups;

})(BasicCrud);

OfflineMessages = (function(superClass) {
  extend(OfflineMessages, superClass);

  function OfflineMessages(api) {
    this.api = api;
    OfflineMessages.__super__.constructor.call(this, this.api, 'offline_messages');
    delete this.create;
    delete this.update;
    delete this["delete"];
  }

  return OfflineMessages;

})(BasicCrud);

ReportsV1 = (function() {
  function ReportsV1(api) {
    this.api = api;
    this.getInvitationsReport = bind(this.getInvitationsReport, this);
    this.getChatsReport = bind(this.getChatsReport, this);
    this.path = 'reports';
  }

  ReportsV1.prototype.getChatsReport = function(params, callback) {
    if (params == null) {
      params = {};
    }
    if (typeof params === 'function' && (callback == null)) {
      callback = params;
      params = {};
    }
    return this.api.get(this.path + '/chats', params, (function(_this) {
      return function(response) {
        if (callback != null) {
          return callback(response);
        }
      };
    })(this));
  };

  ReportsV1.prototype.getInvitationsReport = function(params, callback) {
    if (params == null) {
      params = {};
    }
    if (typeof params === 'function' && (callback == null)) {
      callback = params;
      params = {};
    }
    return this.api.get(this.path + '/invitations', params, (function(_this) {
      return function(response) {
        if (callback != null) {
          return callback(response);
        }
      };
    })(this));
  };

  return ReportsV1;

})();

Reports = (function() {
  function Reports(api) {
    this.api = api;
    this.getGoalsReport = bind(this.getGoalsReport, this);
    this.getChattingTimeReport = bind(this.getChattingTimeReport, this);
    this.getAvailabilityReport = bind(this.getAvailabilityReport, this);
    this.getQueueWaitingTimesReport = bind(this.getQueueWaitingTimesReport, this);
    this.getQueuedVisitorsReport = bind(this.getQueuedVisitorsReport, this);
    this.getRatingsRanking = bind(this.getRatingsRanking, this);
    this.getRatingsReport = bind(this.getRatingsReport, this);
    this.getChatsReport = bind(this.getChatsReport, this);
    this.getDashboardDataForGroup = bind(this.getDashboardDataForGroup, this);
    this.getDashboardDataForAgent = bind(this.getDashboardDataForAgent, this);
    this.getDashboardData = bind(this.getDashboardData, this);
    this.path = 'reports';
  }

  Reports.prototype.getDashboardData = function(callback) {
    return this.api.get(this.path + '/dashboard', {}, (function(_this) {
      return function(response) {
        if (callback != null) {
          return callback(response);
        }
      };
    })(this));
  };

  Reports.prototype.getDashboardDataForAgent = function(id, callback) {
    return this.api.get(this.path + '/dashboard/agent/' + id, {}, (function(_this) {
      return function(response) {
        if (callback != null) {
          return callback(response);
        }
      };
    })(this));
  };

  Reports.prototype.getDashboardDataForGroup = function(id, callback) {
    return this.api.get(this.path + '/dashboard/group/' + id, {}, (function(_this) {
      return function(response) {
        if (callback != null) {
          return callback(response);
        }
      };
    })(this));
  };

  Reports.prototype.getChatsReport = function(params, callback) {
    if (params == null) {
      params = {};
    }
    if (typeof params === 'function' && (callback == null)) {
      callback = params;
      params = {};
    }
    return this.api.get(this.path + '/chats', params, (function(_this) {
      return function(response) {
        if (callback != null) {
          return callback(response);
        }
      };
    })(this));
  };

  Reports.prototype.getRatingsReport = function(params, callback) {
    if (params == null) {
      params = {};
    }
    if (typeof params === 'function' && (callback == null)) {
      callback = params;
      params = {};
    }
    return this.api.get(this.path + '/ratings', params, (function(_this) {
      return function(response) {
        if (callback != null) {
          return callback(response);
        }
      };
    })(this));
  };

  Reports.prototype.getRatingsRanking = function(params, callback) {
    if (params == null) {
      params = {};
    }
    if (typeof params === 'function' && (callback == null)) {
      callback = params;
      params = {};
    }
    return this.api.get(this.path + '/ratings/ranking', params, (function(_this) {
      return function(response) {
        if (callback != null) {
          return callback(response);
        }
      };
    })(this));
  };

  Reports.prototype.getQueuedVisitorsReport = function(params, callback) {
    if (params == null) {
      params = {};
    }
    if (typeof params === 'function' && (callback == null)) {
      callback = params;
      params = {};
    }
    return this.api.get(this.path + '/queued_visitors', params, (function(_this) {
      return function(response) {
        if (callback != null) {
          return callback(response);
        }
      };
    })(this));
  };

  Reports.prototype.getQueueWaitingTimesReport = function(params, callback) {
    if (params == null) {
      params = {};
    }
    if (typeof params === 'function' && (callback == null)) {
      callback = params;
      params = {};
    }
    return this.api.get(this.path + '/queued_visitors/waiting_times', params, (function(_this) {
      return function(response) {
        if (callback != null) {
          return callback(response);
        }
      };
    })(this));
  };

  Reports.prototype.getAvailabilityReport = function(params, callback) {
    if (params == null) {
      params = {};
    }
    if (typeof params === 'function' && (callback == null)) {
      callback = params;
      params = {};
    }
    return this.api.get(this.path + '/availability', params, (function(_this) {
      return function(response) {
        if (callback != null) {
          return callback(response);
        }
      };
    })(this));
  };

  Reports.prototype.getChattingTimeReport = function(params, callback) {
    if (params == null) {
      params = {};
    }
    if (typeof params === 'function' && (callback == null)) {
      callback = params;
      params = {};
    }
    return this.api.get(this.path + '/chatting_time', params, (function(_this) {
      return function(response) {
        if (callback != null) {
          return callback(response);
        }
      };
    })(this));
  };

  Reports.prototype.getGoalsReport = function(params, callback) {
    if (params == null) {
      params = {};
    }
    if (typeof params === 'function' && (callback == null)) {
      callback = params;
      params = {};
    }
    return this.api.get(this.path + '/goals', params, (function(_this) {
      return function(response) {
        if (callback != null) {
          return callback(response);
        }
      };
    })(this));
  };

  return Reports;

})();

Status = (function() {
  function Status(api) {
    this.api = api;
    this.get = bind(this.get, this);
  }

  Status.prototype.get = function(params, callback) {
    if (params == null) {
      params = {};
    }
    if (typeof params === 'function' && (callback == null)) {
      callback = params;
      params = {};
    }
    return this.api.get('status', params, (function(_this) {
      return function(response) {
        if (callback != null) {
          return callback(response);
        }
      };
    })(this));
  };

  return Status;

})();

Visitors = (function() {
  function Visitors(api) {
    this.api = api;
    this.addCustomVisitorDetails = bind(this.addCustomVisitorDetails, this);
    this.listOnlyChattingVisitors = bind(this.listOnlyChattingVisitors, this);
    this.list = bind(this.list, this);
    this.path = 'visitors';
  }

  Visitors.prototype.list = function(params, callback) {
    if (params == null) {
      params = {};
    }
    if (typeof params === 'function' && (callback == null)) {
      callback = params;
      params = {};
    }
    return this.api.get(this.path, params, (function(_this) {
      return function(response) {
        if (callback != null) {
          return callback(response);
        }
      };
    })(this));
  };

  Visitors.prototype.listOnlyChattingVisitors = function(callback) {
    return this.api.get(this.path + '/chatting', {}, (function(_this) {
      return function(response) {
        if (callback != null) {
          return callback(response);
        }
      };
    })(this));
  };

  Visitors.prototype.addCustomVisitorDetails = function(id, params, callback) {
    if (params == null) {
      params = {};
    }
    if (typeof params === 'function' && (callback == null)) {
      callback = params;
      params = {};
    }
    return this.api.post(this.path + '/' + id + '/details', params, (function(_this) {
      return function(response) {
        if (callback != null) {
          return callback(response);
        }
      };
    })(this));
  };

  return Visitors;

})();

Skills = (function(superClass) {
  extend(Skills, superClass);

  function Skills(api) {
    this.api = api;
    Skills.__super__.constructor.call(this, this.api, 'skills');
  }

  return Skills;

})(BasicCrud);

PushPages = (function(superClass) {
  extend(PushPages, superClass);

  function PushPages(api) {
    this.api = api;
    PushPages.__super__.constructor.call(this, this.api, 'push_pages');
  }

  return PushPages;

})(BasicCrud);

TrackingCode = (function() {
  function TrackingCode(api) {
    this.api = api;
    this.get = bind(this.get, this);
    this.path = 'tracking_code';
  }

  TrackingCode.prototype.get = function(callback) {
    return this.api.get(this.path + '/', {}, (function(_this) {
      return function(response) {
        if (callback != null) {
          return callback(response);
        }
      };
    })(this));
  };

  return TrackingCode;

})();

ButtonCode = (function() {
  function ButtonCode(api) {
    this.api = api;
    this.get = bind(this.get, this);
    this.path = 'button_code';
  }

  ButtonCode.prototype.get = function(callback) {
    return this.api.get(this.path + '/', {}, (function(_this) {
      return function(response) {
        if (callback != null) {
          return callback(response);
        }
      };
    })(this));
  };

  return ButtonCode;

})();

LiveChatApi = (function(superClass) {
  extend(LiveChatApi, superClass);

  function LiveChatApi(user, apiKey, apiVersion) {
    this.user = user;
    this.apiKey = apiKey;
    this.apiVersion = apiVersion != null ? apiVersion : 2;
    LiveChatApi.__super__.constructor.call(this, this.user, this.apiKey, this.apiVersion);
    if (this.apiVersion === 2) {
      this.agents = new Agents(this);
      this.groups = new Groups(this);
      this.reports = new Reports(this);
      this.greetings = new Greetings(this);
    } else if (this.apiVersion === 1) {
      this.operators = new Operators(this);
      this.offline_messages = new OfflineMessages(this);
      this.skills = new Skills(this);
      this.push_pages = new PushPages(this);
      this.tracking_code = new TrackingCode(this);
      this.button_code = new ButtonCode(this);
      this.reports = new ReportsV1(this);
    }
    this.canned_responses = new CannedResponses(this);
    this.chats = new Chats(this);
    this.goals = new Goals(this);
    this.status = new Status(this);
    this.visitors = new Visitors(this);
  }

  return LiveChatApi;

})(Requester);

exports.LiveChatApi = LiveChatApi;
