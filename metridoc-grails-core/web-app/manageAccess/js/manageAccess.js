/*
  *Copyright 2013 Trustees of the University of Pennsylvania. Licensed under the
  *	Educational Community License, Version 2.0 (the "License"); you may
  *	not use this file except in compliance with the License. You may
  *	obtain a copy of the License at
  *
  *http://www.osedu.org/licenses/ECL-2.0
  *
  *	Unless required by applicable law or agreed to in writing,
  *	software distributed under the License is distributed on an "AS IS"
  *	BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
  *	or implied. See the License for the specific language governing
  *	permissions and limitations under the License.  */

/**
 * Created with IntelliJ IDEA.
 * User: intern
 * Date: 8/15/13
 * Time: 10:03 AM
 * To change this template use File | Settings | File Templates.
 */

function collapseOthers(callingID) {
    if (callingID == 'userList') {
        $('#userList').collapse('toggle');
        $('#roleList').collapse('hide');
        $('#manageReportIndex').collapse('hide');
        $('#cUserList').toggleClass('icon-plus-sign icon-minus-sign');
        $('#cRoleList').addClass('icon-plus-sign').removeClass('icon-minus-sign');
        $('#cManageReportIndex').addClass('icon-plus-sign').removeClass('icon-minus-sign');
        $('#sUserList').toggle();
        $('#sRoleList').show();
        $('#sManageReportIndex').show();

    }
    else if (callingID == 'roleList') {
        $('#roleList').collapse('toggle');
        $('#userList').collapse('hide');
        $('#manageReportIndex').collapse('hide');
        $('#cRoleList').toggleClass('icon-plus-sign icon-minus-sign');
        $('#cUserList').addClass('icon-plus-sign').removeClass('icon-minus-sign');
        $('#cManageReportIndex').addClass('icon-plus-sign').removeClass('icon-minus-sign');
        $('#sUserList').show();
        $('#sRoleList').toggle();
        $('#sManageReportIndex').show();
    }
    else {
        $('#manageReportIndex').collapse('toggle');
        $('#roleList').collapse('hide');
        $('#userList').collapse('hide');
        $('#cManageReportIndex').toggleClass('icon-plus-sign icon-minus-sign');
        $('#cRoleList').addClass('icon-plus-sign').removeClass('icon-minus-sign');
        $('#cUserList').addClass('icon-plus-sign').removeClass('icon-minus-sign');
        $('#sUserList').show();
        $('#sRoleList').show();
        $('#sManageReportIndex').toggle();
    }
}

$(document).ready(function () {
    $("#userList").collapse({toggle: false});
    $("#roleList").collapse({toggle: false});
    $("#manageReportIndex").collapse({toggle: false});

    $('#cRoleList').addClass('icon-plus-sign').removeClass('icon-minus-sign');
    $('#cUserList').addClass('icon-plus-sign').removeClass('icon-minus-sign');
    $('#cManageReportIndex').addClass('icon-plus-sign').removeClass('icon-minus-sign');

    $('#sUserList').show();
    $('#sRoleList').show();
    $('#sManageReportIndex').show();


    var prev = $('#previousExpanded').val();
    var iconId = prev.charAt(0).toUpperCase() + prev.slice(1);
    if (prev != 'none') {
        $('#' + prev).collapse('show');
        $('#' + 'c' + iconId).addClass('icon-minus-sign').removeClass('icon-plus-sign');
        $('#' + 's' + iconId).hide();
    }
});

