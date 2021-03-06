%{--
  - Copyright 2013 Trustees of the University of Pennsylvania. Licensed under the
  - 	Educational Community License, Version 2.0 (the "License"); you may
  - 	not use this file except in compliance with the License. You may
  - 	obtain a copy of the License at
  - 
  - http://www.osedu.org/licenses/ECL-2.0
  - 
  - 	Unless required by applicable law or agreed to in writing,
  - 	software distributed under the License is distributed on an "AS IS"
  - 	BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
  - 	or implied. See the License for the specific language governing
  - 	permissions and limitations under the License.
  --}%

<%@ page import="metridoc.rid.RidLibraryUnit" %>
<g:set var="entityName" value="${message(code: 'ridLibraryUnit.label', default: 'RidLibraryUnit')}"/>

<div id="edit-ridInstance" class="content scaffold-edit" role="main">
    <h1><g:message code="default.edit.label" args="[entityName]"/></h1>

    <md:form class="form-horizontal" enctype="multipart/form-data" method="post" useToken="true">
        <g:hiddenField name="id" value="${ridInstance?.id}"/>
        <g:hiddenField name="version" value="${ridInstance?.version}"/>
        <div style="margin-top: 2em">
            <tmpl:form/>
        </div>
        <fieldset class="buttons">
            <g:actionSubmit style="float: right; margin-left: 1em" class="btn btn-success active-on-change"
                            action="update"
                            value="${message(code: 'default.button.update.label', default: 'Update')}"/>
        </fieldset>
    </md:form>
</div>