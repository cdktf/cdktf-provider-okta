# `swaApp` Submodule <a name="`swaApp` Submodule" id="@cdktf/provider-okta.swaApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SwaApp <a name="SwaApp" id="@cdktf/provider-okta.swaApp.SwaApp"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/swa_app okta_swa_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.swa_app.SwaApp;

SwaApp.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .label(java.lang.String)
//  .accessibilityErrorRedirectUrl(java.lang.String)
//  .accessibilityLoginRedirectUrl(java.lang.String)
//  .accessibilitySelfService(java.lang.Boolean)
//  .accessibilitySelfService(IResolvable)
//  .adminNote(java.lang.String)
//  .appLinksJson(java.lang.String)
//  .autoSubmitToolbar(java.lang.Boolean)
//  .autoSubmitToolbar(IResolvable)
//  .buttonField(java.lang.String)
//  .checkbox(java.lang.String)
//  .enduserNote(java.lang.String)
//  .groups(java.util.List<java.lang.String>)
//  .hideIos(java.lang.Boolean)
//  .hideIos(IResolvable)
//  .hideWeb(java.lang.Boolean)
//  .hideWeb(IResolvable)
//  .id(java.lang.String)
//  .logo(java.lang.String)
//  .passwordField(java.lang.String)
//  .preconfiguredApp(java.lang.String)
//  .redirectUrl(java.lang.String)
//  .skipGroups(java.lang.Boolean)
//  .skipGroups(IResolvable)
//  .skipUsers(java.lang.Boolean)
//  .skipUsers(IResolvable)
//  .status(java.lang.String)
//  .timeouts(SwaAppTimeouts)
//  .url(java.lang.String)
//  .urlRegex(java.lang.String)
//  .usernameField(java.lang.String)
//  .userNameTemplate(java.lang.String)
//  .userNameTemplatePushStatus(java.lang.String)
//  .userNameTemplateSuffix(java.lang.String)
//  .userNameTemplateType(java.lang.String)
//  .users(IResolvable)
//  .users(java.util.List<SwaAppUsers>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.label">label</a></code> | <code>java.lang.String</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>java.lang.String</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>java.lang.String</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.accessibilitySelfService">accessibilitySelfService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.adminNote">adminNote</a></code> | <code>java.lang.String</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.appLinksJson">appLinksJson</a></code> | <code>java.lang.String</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.buttonField">buttonField</a></code> | <code>java.lang.String</code> | Login button field. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.checkbox">checkbox</a></code> | <code>java.lang.String</code> | CSS selector for the checkbox. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.enduserNote">enduserNote</a></code> | <code>java.lang.String</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.hideIos">hideIos</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.hideWeb">hideWeb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#id SwaApp#id}. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.logo">logo</a></code> | <code>java.lang.String</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.passwordField">passwordField</a></code> | <code>java.lang.String</code> | Login password field. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.preconfiguredApp">preconfiguredApp</a></code> | <code>java.lang.String</code> | Preconfigured app name. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.redirectUrl">redirectUrl</a></code> | <code>java.lang.String</code> | If going to the login page URL redirects to another page, then enter that URL here. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.skipGroups">skipGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.skipUsers">skipUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeouts">SwaAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.url">url</a></code> | <code>java.lang.String</code> | Login URL. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.urlRegex">urlRegex</a></code> | <code>java.lang.String</code> | A regex that further restricts URL to the specified regex. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.usernameField">usernameField</a></code> | <code>java.lang.String</code> | Login username field. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.userNameTemplate">userNameTemplate</a></code> | <code>java.lang.String</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>java.lang.String</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>java.lang.String</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.userNameTemplateType">userNameTemplateType</a></code> | <code>java.lang.String</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.users">users</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.swaApp.SwaAppUsers">SwaAppUsers</a>></code> | users block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.label"></a>

- *Type:* java.lang.String

Pretty name of app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#label SwaApp#label}

---

##### `accessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.accessibilityErrorRedirectUrl"></a>

- *Type:* java.lang.String

Custom error page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#accessibility_error_redirect_url SwaApp#accessibility_error_redirect_url}

---

##### `accessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.accessibilityLoginRedirectUrl"></a>

- *Type:* java.lang.String

Custom login page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#accessibility_login_redirect_url SwaApp#accessibility_login_redirect_url}

---

##### `accessibilitySelfService`<sup>Optional</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.accessibilitySelfService"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable self service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#accessibility_self_service SwaApp#accessibility_self_service}

---

##### `adminNote`<sup>Optional</sup> <a name="adminNote" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.adminNote"></a>

- *Type:* java.lang.String

Application notes for admins.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#admin_note SwaApp#admin_note}

---

##### `appLinksJson`<sup>Optional</sup> <a name="appLinksJson" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.appLinksJson"></a>

- *Type:* java.lang.String

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#app_links_json SwaApp#app_links_json}

---

##### `autoSubmitToolbar`<sup>Optional</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.autoSubmitToolbar"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#auto_submit_toolbar SwaApp#auto_submit_toolbar}

---

##### `buttonField`<sup>Optional</sup> <a name="buttonField" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.buttonField"></a>

- *Type:* java.lang.String

Login button field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#button_field SwaApp#button_field}

---

##### `checkbox`<sup>Optional</sup> <a name="checkbox" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.checkbox"></a>

- *Type:* java.lang.String

CSS selector for the checkbox.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#checkbox SwaApp#checkbox}

---

##### `enduserNote`<sup>Optional</sup> <a name="enduserNote" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.enduserNote"></a>

- *Type:* java.lang.String

Application notes for end users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#enduser_note SwaApp#enduser_note}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.groups"></a>

- *Type:* java.util.List<java.lang.String>

Groups associated with the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#groups SwaApp#groups}

---

##### `hideIos`<sup>Optional</sup> <a name="hideIos" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.hideIos"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#hide_ios SwaApp#hide_ios}

---

##### `hideWeb`<sup>Optional</sup> <a name="hideWeb" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.hideWeb"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon to users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#hide_web SwaApp#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#id SwaApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.logo"></a>

- *Type:* java.lang.String

Local path to logo of the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#logo SwaApp#logo}

---

##### `passwordField`<sup>Optional</sup> <a name="passwordField" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.passwordField"></a>

- *Type:* java.lang.String

Login password field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#password_field SwaApp#password_field}

---

##### `preconfiguredApp`<sup>Optional</sup> <a name="preconfiguredApp" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.preconfiguredApp"></a>

- *Type:* java.lang.String

Preconfigured app name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#preconfigured_app SwaApp#preconfigured_app}

---

##### `redirectUrl`<sup>Optional</sup> <a name="redirectUrl" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.redirectUrl"></a>

- *Type:* java.lang.String

If going to the login page URL redirects to another page, then enter that URL here.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#redirect_url SwaApp#redirect_url}

---

##### `skipGroups`<sup>Optional</sup> <a name="skipGroups" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.skipGroups"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#skip_groups SwaApp#skip_groups}

---

##### `skipUsers`<sup>Optional</sup> <a name="skipUsers" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.skipUsers"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#skip_users SwaApp#skip_users}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Status of application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#status SwaApp#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-okta.swaApp.SwaAppTimeouts">SwaAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#timeouts SwaApp#timeouts}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.url"></a>

- *Type:* java.lang.String

Login URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#url SwaApp#url}

---

##### `urlRegex`<sup>Optional</sup> <a name="urlRegex" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.urlRegex"></a>

- *Type:* java.lang.String

A regex that further restricts URL to the specified regex.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#url_regex SwaApp#url_regex}

---

##### `usernameField`<sup>Optional</sup> <a name="usernameField" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.usernameField"></a>

- *Type:* java.lang.String

Login username field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#username_field SwaApp#username_field}

---

##### `userNameTemplate`<sup>Optional</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.userNameTemplate"></a>

- *Type:* java.lang.String

Username template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#user_name_template SwaApp#user_name_template}

---

##### `userNameTemplatePushStatus`<sup>Optional</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.userNameTemplatePushStatus"></a>

- *Type:* java.lang.String

Push username on update.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#user_name_template_push_status SwaApp#user_name_template_push_status}

---

##### `userNameTemplateSuffix`<sup>Optional</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.userNameTemplateSuffix"></a>

- *Type:* java.lang.String

Username template suffix.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#user_name_template_suffix SwaApp#user_name_template_suffix}

---

##### `userNameTemplateType`<sup>Optional</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.userNameTemplateType"></a>

- *Type:* java.lang.String

Username template type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#user_name_template_type SwaApp#user_name_template_type}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-okta.swaApp.SwaApp.Initializer.parameter.users"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.swaApp.SwaAppUsers">SwaAppUsers</a>>

users block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#users SwaApp#users}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.putUsers">putUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetAccessibilityErrorRedirectUrl">resetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetAccessibilityLoginRedirectUrl">resetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetAccessibilitySelfService">resetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetAdminNote">resetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetAppLinksJson">resetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetAutoSubmitToolbar">resetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetButtonField">resetButtonField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetCheckbox">resetCheckbox</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetEnduserNote">resetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetHideIos">resetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetHideWeb">resetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetLogo">resetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetPasswordField">resetPasswordField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetPreconfiguredApp">resetPreconfiguredApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetRedirectUrl">resetRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetSkipGroups">resetSkipGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetSkipUsers">resetSkipUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetUrlRegex">resetUrlRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetUsernameField">resetUsernameField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetUserNameTemplate">resetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetUserNameTemplatePushStatus">resetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetUserNameTemplateSuffix">resetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetUserNameTemplateType">resetUserNameTemplateType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.resetUsers">resetUsers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.swaApp.SwaApp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.swaApp.SwaApp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.swaApp.SwaApp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.swaApp.SwaApp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.swaApp.SwaApp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.swaApp.SwaApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.swaApp.SwaApp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.swaApp.SwaApp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.swaApp.SwaApp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-okta.swaApp.SwaApp.putTimeouts"></a>

```java
public void putTimeouts(SwaAppTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.swaApp.SwaApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.swaApp.SwaAppTimeouts">SwaAppTimeouts</a>

---

##### `putUsers` <a name="putUsers" id="@cdktf/provider-okta.swaApp.SwaApp.putUsers"></a>

```java
public void putUsers(IResolvable OR java.util.List<SwaAppUsers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.swaApp.SwaApp.putUsers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.swaApp.SwaAppUsers">SwaAppUsers</a>>

---

##### `resetAccessibilityErrorRedirectUrl` <a name="resetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.swaApp.SwaApp.resetAccessibilityErrorRedirectUrl"></a>

```java
public void resetAccessibilityErrorRedirectUrl()
```

##### `resetAccessibilityLoginRedirectUrl` <a name="resetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.swaApp.SwaApp.resetAccessibilityLoginRedirectUrl"></a>

```java
public void resetAccessibilityLoginRedirectUrl()
```

##### `resetAccessibilitySelfService` <a name="resetAccessibilitySelfService" id="@cdktf/provider-okta.swaApp.SwaApp.resetAccessibilitySelfService"></a>

```java
public void resetAccessibilitySelfService()
```

##### `resetAdminNote` <a name="resetAdminNote" id="@cdktf/provider-okta.swaApp.SwaApp.resetAdminNote"></a>

```java
public void resetAdminNote()
```

##### `resetAppLinksJson` <a name="resetAppLinksJson" id="@cdktf/provider-okta.swaApp.SwaApp.resetAppLinksJson"></a>

```java
public void resetAppLinksJson()
```

##### `resetAutoSubmitToolbar` <a name="resetAutoSubmitToolbar" id="@cdktf/provider-okta.swaApp.SwaApp.resetAutoSubmitToolbar"></a>

```java
public void resetAutoSubmitToolbar()
```

##### `resetButtonField` <a name="resetButtonField" id="@cdktf/provider-okta.swaApp.SwaApp.resetButtonField"></a>

```java
public void resetButtonField()
```

##### `resetCheckbox` <a name="resetCheckbox" id="@cdktf/provider-okta.swaApp.SwaApp.resetCheckbox"></a>

```java
public void resetCheckbox()
```

##### `resetEnduserNote` <a name="resetEnduserNote" id="@cdktf/provider-okta.swaApp.SwaApp.resetEnduserNote"></a>

```java
public void resetEnduserNote()
```

##### `resetGroups` <a name="resetGroups" id="@cdktf/provider-okta.swaApp.SwaApp.resetGroups"></a>

```java
public void resetGroups()
```

##### `resetHideIos` <a name="resetHideIos" id="@cdktf/provider-okta.swaApp.SwaApp.resetHideIos"></a>

```java
public void resetHideIos()
```

##### `resetHideWeb` <a name="resetHideWeb" id="@cdktf/provider-okta.swaApp.SwaApp.resetHideWeb"></a>

```java
public void resetHideWeb()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.swaApp.SwaApp.resetId"></a>

```java
public void resetId()
```

##### `resetLogo` <a name="resetLogo" id="@cdktf/provider-okta.swaApp.SwaApp.resetLogo"></a>

```java
public void resetLogo()
```

##### `resetPasswordField` <a name="resetPasswordField" id="@cdktf/provider-okta.swaApp.SwaApp.resetPasswordField"></a>

```java
public void resetPasswordField()
```

##### `resetPreconfiguredApp` <a name="resetPreconfiguredApp" id="@cdktf/provider-okta.swaApp.SwaApp.resetPreconfiguredApp"></a>

```java
public void resetPreconfiguredApp()
```

##### `resetRedirectUrl` <a name="resetRedirectUrl" id="@cdktf/provider-okta.swaApp.SwaApp.resetRedirectUrl"></a>

```java
public void resetRedirectUrl()
```

##### `resetSkipGroups` <a name="resetSkipGroups" id="@cdktf/provider-okta.swaApp.SwaApp.resetSkipGroups"></a>

```java
public void resetSkipGroups()
```

##### `resetSkipUsers` <a name="resetSkipUsers" id="@cdktf/provider-okta.swaApp.SwaApp.resetSkipUsers"></a>

```java
public void resetSkipUsers()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.swaApp.SwaApp.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-okta.swaApp.SwaApp.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-okta.swaApp.SwaApp.resetUrl"></a>

```java
public void resetUrl()
```

##### `resetUrlRegex` <a name="resetUrlRegex" id="@cdktf/provider-okta.swaApp.SwaApp.resetUrlRegex"></a>

```java
public void resetUrlRegex()
```

##### `resetUsernameField` <a name="resetUsernameField" id="@cdktf/provider-okta.swaApp.SwaApp.resetUsernameField"></a>

```java
public void resetUsernameField()
```

##### `resetUserNameTemplate` <a name="resetUserNameTemplate" id="@cdktf/provider-okta.swaApp.SwaApp.resetUserNameTemplate"></a>

```java
public void resetUserNameTemplate()
```

##### `resetUserNameTemplatePushStatus` <a name="resetUserNameTemplatePushStatus" id="@cdktf/provider-okta.swaApp.SwaApp.resetUserNameTemplatePushStatus"></a>

```java
public void resetUserNameTemplatePushStatus()
```

##### `resetUserNameTemplateSuffix` <a name="resetUserNameTemplateSuffix" id="@cdktf/provider-okta.swaApp.SwaApp.resetUserNameTemplateSuffix"></a>

```java
public void resetUserNameTemplateSuffix()
```

##### `resetUserNameTemplateType` <a name="resetUserNameTemplateType" id="@cdktf/provider-okta.swaApp.SwaApp.resetUserNameTemplateType"></a>

```java
public void resetUserNameTemplateType()
```

##### `resetUsers` <a name="resetUsers" id="@cdktf/provider-okta.swaApp.SwaApp.resetUsers"></a>

```java
public void resetUsers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.swaApp.SwaApp.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.swa_app.SwaApp;

SwaApp.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.swaApp.SwaApp.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.swaApp.SwaApp.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.swa_app.SwaApp;

SwaApp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.swaApp.SwaApp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.swaApp.SwaApp.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.swa_app.SwaApp;

SwaApp.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.swaApp.SwaApp.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.logoUrl">logoUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.signOnMode">signOnMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference">SwaAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.users">users</a></code> | <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersList">SwaAppUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.accessibilityErrorRedirectUrlInput">accessibilityErrorRedirectUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.accessibilityLoginRedirectUrlInput">accessibilityLoginRedirectUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.accessibilitySelfServiceInput">accessibilitySelfServiceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.adminNoteInput">adminNoteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.appLinksJsonInput">appLinksJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.autoSubmitToolbarInput">autoSubmitToolbarInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.buttonFieldInput">buttonFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.checkboxInput">checkboxInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.enduserNoteInput">enduserNoteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.groupsInput">groupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.hideIosInput">hideIosInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.hideWebInput">hideWebInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.logoInput">logoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.passwordFieldInput">passwordFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.preconfiguredAppInput">preconfiguredAppInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.redirectUrlInput">redirectUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.skipGroupsInput">skipGroupsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.skipUsersInput">skipUsersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeouts">SwaAppTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.urlRegexInput">urlRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.usernameFieldInput">usernameFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.userNameTemplateInput">userNameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.userNameTemplatePushStatusInput">userNameTemplatePushStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.userNameTemplateSuffixInput">userNameTemplateSuffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.userNameTemplateTypeInput">userNameTemplateTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.usersInput">usersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.swaApp.SwaAppUsers">SwaAppUsers</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.adminNote">adminNote</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.appLinksJson">appLinksJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.buttonField">buttonField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.checkbox">checkbox</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.enduserNote">enduserNote</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.hideIos">hideIos</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.hideWeb">hideWeb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.logo">logo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.passwordField">passwordField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.preconfiguredApp">preconfiguredApp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.redirectUrl">redirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.skipGroups">skipGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.skipUsers">skipUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.urlRegex">urlRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.usernameField">usernameField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.userNameTemplate">userNameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.userNameTemplateType">userNameTemplateType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.swaApp.SwaApp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.swaApp.SwaApp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.swaApp.SwaApp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.swaApp.SwaApp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.swaApp.SwaApp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.swaApp.SwaApp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.swaApp.SwaApp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.swaApp.SwaApp.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.swaApp.SwaApp.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.swaApp.SwaApp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.swaApp.SwaApp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.swaApp.SwaApp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.swaApp.SwaApp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.swaApp.SwaApp.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `logoUrl`<sup>Required</sup> <a name="logoUrl" id="@cdktf/provider-okta.swaApp.SwaApp.property.logoUrl"></a>

```java
public java.lang.String getLogoUrl();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.swaApp.SwaApp.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `signOnMode`<sup>Required</sup> <a name="signOnMode" id="@cdktf/provider-okta.swaApp.SwaApp.property.signOnMode"></a>

```java
public java.lang.String getSignOnMode();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-okta.swaApp.SwaApp.property.timeouts"></a>

```java
public SwaAppTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference">SwaAppTimeoutsOutputReference</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-okta.swaApp.SwaApp.property.users"></a>

```java
public SwaAppUsersList getUsers();
```

- *Type:* <a href="#@cdktf/provider-okta.swaApp.SwaAppUsersList">SwaAppUsersList</a>

---

##### `accessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.accessibilityErrorRedirectUrlInput"></a>

```java
public java.lang.String getAccessibilityErrorRedirectUrlInput();
```

- *Type:* java.lang.String

---

##### `accessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.accessibilityLoginRedirectUrlInput"></a>

```java
public java.lang.String getAccessibilityLoginRedirectUrlInput();
```

- *Type:* java.lang.String

---

##### `accessibilitySelfServiceInput`<sup>Optional</sup> <a name="accessibilitySelfServiceInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.accessibilitySelfServiceInput"></a>

```java
public java.lang.Object getAccessibilitySelfServiceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `adminNoteInput`<sup>Optional</sup> <a name="adminNoteInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.adminNoteInput"></a>

```java
public java.lang.String getAdminNoteInput();
```

- *Type:* java.lang.String

---

##### `appLinksJsonInput`<sup>Optional</sup> <a name="appLinksJsonInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.appLinksJsonInput"></a>

```java
public java.lang.String getAppLinksJsonInput();
```

- *Type:* java.lang.String

---

##### `autoSubmitToolbarInput`<sup>Optional</sup> <a name="autoSubmitToolbarInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.autoSubmitToolbarInput"></a>

```java
public java.lang.Object getAutoSubmitToolbarInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `buttonFieldInput`<sup>Optional</sup> <a name="buttonFieldInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.buttonFieldInput"></a>

```java
public java.lang.String getButtonFieldInput();
```

- *Type:* java.lang.String

---

##### `checkboxInput`<sup>Optional</sup> <a name="checkboxInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.checkboxInput"></a>

```java
public java.lang.String getCheckboxInput();
```

- *Type:* java.lang.String

---

##### `enduserNoteInput`<sup>Optional</sup> <a name="enduserNoteInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.enduserNoteInput"></a>

```java
public java.lang.String getEnduserNoteInput();
```

- *Type:* java.lang.String

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.groupsInput"></a>

```java
public java.util.List<java.lang.String> getGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hideIosInput`<sup>Optional</sup> <a name="hideIosInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.hideIosInput"></a>

```java
public java.lang.Object getHideIosInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hideWebInput`<sup>Optional</sup> <a name="hideWebInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.hideWebInput"></a>

```java
public java.lang.Object getHideWebInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `logoInput`<sup>Optional</sup> <a name="logoInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.logoInput"></a>

```java
public java.lang.String getLogoInput();
```

- *Type:* java.lang.String

---

##### `passwordFieldInput`<sup>Optional</sup> <a name="passwordFieldInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.passwordFieldInput"></a>

```java
public java.lang.String getPasswordFieldInput();
```

- *Type:* java.lang.String

---

##### `preconfiguredAppInput`<sup>Optional</sup> <a name="preconfiguredAppInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.preconfiguredAppInput"></a>

```java
public java.lang.String getPreconfiguredAppInput();
```

- *Type:* java.lang.String

---

##### `redirectUrlInput`<sup>Optional</sup> <a name="redirectUrlInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.redirectUrlInput"></a>

```java
public java.lang.String getRedirectUrlInput();
```

- *Type:* java.lang.String

---

##### `skipGroupsInput`<sup>Optional</sup> <a name="skipGroupsInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.skipGroupsInput"></a>

```java
public java.lang.Object getSkipGroupsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipUsersInput`<sup>Optional</sup> <a name="skipUsersInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.skipUsersInput"></a>

```java
public java.lang.Object getSkipUsersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-okta.swaApp.SwaAppTimeouts">SwaAppTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `urlRegexInput`<sup>Optional</sup> <a name="urlRegexInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.urlRegexInput"></a>

```java
public java.lang.String getUrlRegexInput();
```

- *Type:* java.lang.String

---

##### `usernameFieldInput`<sup>Optional</sup> <a name="usernameFieldInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.usernameFieldInput"></a>

```java
public java.lang.String getUsernameFieldInput();
```

- *Type:* java.lang.String

---

##### `userNameTemplateInput`<sup>Optional</sup> <a name="userNameTemplateInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.userNameTemplateInput"></a>

```java
public java.lang.String getUserNameTemplateInput();
```

- *Type:* java.lang.String

---

##### `userNameTemplatePushStatusInput`<sup>Optional</sup> <a name="userNameTemplatePushStatusInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.userNameTemplatePushStatusInput"></a>

```java
public java.lang.String getUserNameTemplatePushStatusInput();
```

- *Type:* java.lang.String

---

##### `userNameTemplateSuffixInput`<sup>Optional</sup> <a name="userNameTemplateSuffixInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.userNameTemplateSuffixInput"></a>

```java
public java.lang.String getUserNameTemplateSuffixInput();
```

- *Type:* java.lang.String

---

##### `userNameTemplateTypeInput`<sup>Optional</sup> <a name="userNameTemplateTypeInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.userNameTemplateTypeInput"></a>

```java
public java.lang.String getUserNameTemplateTypeInput();
```

- *Type:* java.lang.String

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="@cdktf/provider-okta.swaApp.SwaApp.property.usersInput"></a>

```java
public java.lang.Object getUsersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.swaApp.SwaAppUsers">SwaAppUsers</a>>

---

##### `accessibilityErrorRedirectUrl`<sup>Required</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.swaApp.SwaApp.property.accessibilityErrorRedirectUrl"></a>

```java
public java.lang.String getAccessibilityErrorRedirectUrl();
```

- *Type:* java.lang.String

---

##### `accessibilityLoginRedirectUrl`<sup>Required</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.swaApp.SwaApp.property.accessibilityLoginRedirectUrl"></a>

```java
public java.lang.String getAccessibilityLoginRedirectUrl();
```

- *Type:* java.lang.String

---

##### `accessibilitySelfService`<sup>Required</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.swaApp.SwaApp.property.accessibilitySelfService"></a>

```java
public java.lang.Object getAccessibilitySelfService();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `adminNote`<sup>Required</sup> <a name="adminNote" id="@cdktf/provider-okta.swaApp.SwaApp.property.adminNote"></a>

```java
public java.lang.String getAdminNote();
```

- *Type:* java.lang.String

---

##### `appLinksJson`<sup>Required</sup> <a name="appLinksJson" id="@cdktf/provider-okta.swaApp.SwaApp.property.appLinksJson"></a>

```java
public java.lang.String getAppLinksJson();
```

- *Type:* java.lang.String

---

##### `autoSubmitToolbar`<sup>Required</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.swaApp.SwaApp.property.autoSubmitToolbar"></a>

```java
public java.lang.Object getAutoSubmitToolbar();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `buttonField`<sup>Required</sup> <a name="buttonField" id="@cdktf/provider-okta.swaApp.SwaApp.property.buttonField"></a>

```java
public java.lang.String getButtonField();
```

- *Type:* java.lang.String

---

##### `checkbox`<sup>Required</sup> <a name="checkbox" id="@cdktf/provider-okta.swaApp.SwaApp.property.checkbox"></a>

```java
public java.lang.String getCheckbox();
```

- *Type:* java.lang.String

---

##### `enduserNote`<sup>Required</sup> <a name="enduserNote" id="@cdktf/provider-okta.swaApp.SwaApp.property.enduserNote"></a>

```java
public java.lang.String getEnduserNote();
```

- *Type:* java.lang.String

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-okta.swaApp.SwaApp.property.groups"></a>

```java
public java.util.List<java.lang.String> getGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hideIos`<sup>Required</sup> <a name="hideIos" id="@cdktf/provider-okta.swaApp.SwaApp.property.hideIos"></a>

```java
public java.lang.Object getHideIos();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hideWeb`<sup>Required</sup> <a name="hideWeb" id="@cdktf/provider-okta.swaApp.SwaApp.property.hideWeb"></a>

```java
public java.lang.Object getHideWeb();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.swaApp.SwaApp.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.swaApp.SwaApp.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.swaApp.SwaApp.property.logo"></a>

```java
public java.lang.String getLogo();
```

- *Type:* java.lang.String

---

##### `passwordField`<sup>Required</sup> <a name="passwordField" id="@cdktf/provider-okta.swaApp.SwaApp.property.passwordField"></a>

```java
public java.lang.String getPasswordField();
```

- *Type:* java.lang.String

---

##### `preconfiguredApp`<sup>Required</sup> <a name="preconfiguredApp" id="@cdktf/provider-okta.swaApp.SwaApp.property.preconfiguredApp"></a>

```java
public java.lang.String getPreconfiguredApp();
```

- *Type:* java.lang.String

---

##### `redirectUrl`<sup>Required</sup> <a name="redirectUrl" id="@cdktf/provider-okta.swaApp.SwaApp.property.redirectUrl"></a>

```java
public java.lang.String getRedirectUrl();
```

- *Type:* java.lang.String

---

##### `skipGroups`<sup>Required</sup> <a name="skipGroups" id="@cdktf/provider-okta.swaApp.SwaApp.property.skipGroups"></a>

```java
public java.lang.Object getSkipGroups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipUsers`<sup>Required</sup> <a name="skipUsers" id="@cdktf/provider-okta.swaApp.SwaApp.property.skipUsers"></a>

```java
public java.lang.Object getSkipUsers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.swaApp.SwaApp.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.swaApp.SwaApp.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `urlRegex`<sup>Required</sup> <a name="urlRegex" id="@cdktf/provider-okta.swaApp.SwaApp.property.urlRegex"></a>

```java
public java.lang.String getUrlRegex();
```

- *Type:* java.lang.String

---

##### `usernameField`<sup>Required</sup> <a name="usernameField" id="@cdktf/provider-okta.swaApp.SwaApp.property.usernameField"></a>

```java
public java.lang.String getUsernameField();
```

- *Type:* java.lang.String

---

##### `userNameTemplate`<sup>Required</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.swaApp.SwaApp.property.userNameTemplate"></a>

```java
public java.lang.String getUserNameTemplate();
```

- *Type:* java.lang.String

---

##### `userNameTemplatePushStatus`<sup>Required</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.swaApp.SwaApp.property.userNameTemplatePushStatus"></a>

```java
public java.lang.String getUserNameTemplatePushStatus();
```

- *Type:* java.lang.String

---

##### `userNameTemplateSuffix`<sup>Required</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.swaApp.SwaApp.property.userNameTemplateSuffix"></a>

```java
public java.lang.String getUserNameTemplateSuffix();
```

- *Type:* java.lang.String

---

##### `userNameTemplateType`<sup>Required</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.swaApp.SwaApp.property.userNameTemplateType"></a>

```java
public java.lang.String getUserNameTemplateType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaApp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.swaApp.SwaApp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SwaAppConfig <a name="SwaAppConfig" id="@cdktf/provider-okta.swaApp.SwaAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.swaApp.SwaAppConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.swa_app.SwaAppConfig;

SwaAppConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .label(java.lang.String)
//  .accessibilityErrorRedirectUrl(java.lang.String)
//  .accessibilityLoginRedirectUrl(java.lang.String)
//  .accessibilitySelfService(java.lang.Boolean)
//  .accessibilitySelfService(IResolvable)
//  .adminNote(java.lang.String)
//  .appLinksJson(java.lang.String)
//  .autoSubmitToolbar(java.lang.Boolean)
//  .autoSubmitToolbar(IResolvable)
//  .buttonField(java.lang.String)
//  .checkbox(java.lang.String)
//  .enduserNote(java.lang.String)
//  .groups(java.util.List<java.lang.String>)
//  .hideIos(java.lang.Boolean)
//  .hideIos(IResolvable)
//  .hideWeb(java.lang.Boolean)
//  .hideWeb(IResolvable)
//  .id(java.lang.String)
//  .logo(java.lang.String)
//  .passwordField(java.lang.String)
//  .preconfiguredApp(java.lang.String)
//  .redirectUrl(java.lang.String)
//  .skipGroups(java.lang.Boolean)
//  .skipGroups(IResolvable)
//  .skipUsers(java.lang.Boolean)
//  .skipUsers(IResolvable)
//  .status(java.lang.String)
//  .timeouts(SwaAppTimeouts)
//  .url(java.lang.String)
//  .urlRegex(java.lang.String)
//  .usernameField(java.lang.String)
//  .userNameTemplate(java.lang.String)
//  .userNameTemplatePushStatus(java.lang.String)
//  .userNameTemplateSuffix(java.lang.String)
//  .userNameTemplateType(java.lang.String)
//  .users(IResolvable)
//  .users(java.util.List<SwaAppUsers>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.label">label</a></code> | <code>java.lang.String</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>java.lang.String</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>java.lang.String</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.adminNote">adminNote</a></code> | <code>java.lang.String</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.appLinksJson">appLinksJson</a></code> | <code>java.lang.String</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.buttonField">buttonField</a></code> | <code>java.lang.String</code> | Login button field. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.checkbox">checkbox</a></code> | <code>java.lang.String</code> | CSS selector for the checkbox. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.enduserNote">enduserNote</a></code> | <code>java.lang.String</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.hideIos">hideIos</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.hideWeb">hideWeb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#id SwaApp#id}. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.logo">logo</a></code> | <code>java.lang.String</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.passwordField">passwordField</a></code> | <code>java.lang.String</code> | Login password field. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.preconfiguredApp">preconfiguredApp</a></code> | <code>java.lang.String</code> | Preconfigured app name. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.redirectUrl">redirectUrl</a></code> | <code>java.lang.String</code> | If going to the login page URL redirects to another page, then enter that URL here. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.skipGroups">skipGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.skipUsers">skipUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.status">status</a></code> | <code>java.lang.String</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeouts">SwaAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.url">url</a></code> | <code>java.lang.String</code> | Login URL. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.urlRegex">urlRegex</a></code> | <code>java.lang.String</code> | A regex that further restricts URL to the specified regex. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.usernameField">usernameField</a></code> | <code>java.lang.String</code> | Login username field. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.userNameTemplate">userNameTemplate</a></code> | <code>java.lang.String</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>java.lang.String</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>java.lang.String</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.userNameTemplateType">userNameTemplateType</a></code> | <code>java.lang.String</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppConfig.property.users">users</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.swaApp.SwaAppUsers">SwaAppUsers</a>></code> | users block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Pretty name of app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#label SwaApp#label}

---

##### `accessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.accessibilityErrorRedirectUrl"></a>

```java
public java.lang.String getAccessibilityErrorRedirectUrl();
```

- *Type:* java.lang.String

Custom error page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#accessibility_error_redirect_url SwaApp#accessibility_error_redirect_url}

---

##### `accessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.accessibilityLoginRedirectUrl"></a>

```java
public java.lang.String getAccessibilityLoginRedirectUrl();
```

- *Type:* java.lang.String

Custom login page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#accessibility_login_redirect_url SwaApp#accessibility_login_redirect_url}

---

##### `accessibilitySelfService`<sup>Optional</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.accessibilitySelfService"></a>

```java
public java.lang.Object getAccessibilitySelfService();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable self service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#accessibility_self_service SwaApp#accessibility_self_service}

---

##### `adminNote`<sup>Optional</sup> <a name="adminNote" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.adminNote"></a>

```java
public java.lang.String getAdminNote();
```

- *Type:* java.lang.String

Application notes for admins.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#admin_note SwaApp#admin_note}

---

##### `appLinksJson`<sup>Optional</sup> <a name="appLinksJson" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.appLinksJson"></a>

```java
public java.lang.String getAppLinksJson();
```

- *Type:* java.lang.String

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#app_links_json SwaApp#app_links_json}

---

##### `autoSubmitToolbar`<sup>Optional</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.autoSubmitToolbar"></a>

```java
public java.lang.Object getAutoSubmitToolbar();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#auto_submit_toolbar SwaApp#auto_submit_toolbar}

---

##### `buttonField`<sup>Optional</sup> <a name="buttonField" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.buttonField"></a>

```java
public java.lang.String getButtonField();
```

- *Type:* java.lang.String

Login button field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#button_field SwaApp#button_field}

---

##### `checkbox`<sup>Optional</sup> <a name="checkbox" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.checkbox"></a>

```java
public java.lang.String getCheckbox();
```

- *Type:* java.lang.String

CSS selector for the checkbox.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#checkbox SwaApp#checkbox}

---

##### `enduserNote`<sup>Optional</sup> <a name="enduserNote" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.enduserNote"></a>

```java
public java.lang.String getEnduserNote();
```

- *Type:* java.lang.String

Application notes for end users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#enduser_note SwaApp#enduser_note}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.groups"></a>

```java
public java.util.List<java.lang.String> getGroups();
```

- *Type:* java.util.List<java.lang.String>

Groups associated with the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#groups SwaApp#groups}

---

##### `hideIos`<sup>Optional</sup> <a name="hideIos" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.hideIos"></a>

```java
public java.lang.Object getHideIos();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#hide_ios SwaApp#hide_ios}

---

##### `hideWeb`<sup>Optional</sup> <a name="hideWeb" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.hideWeb"></a>

```java
public java.lang.Object getHideWeb();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon to users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#hide_web SwaApp#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#id SwaApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.logo"></a>

```java
public java.lang.String getLogo();
```

- *Type:* java.lang.String

Local path to logo of the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#logo SwaApp#logo}

---

##### `passwordField`<sup>Optional</sup> <a name="passwordField" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.passwordField"></a>

```java
public java.lang.String getPasswordField();
```

- *Type:* java.lang.String

Login password field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#password_field SwaApp#password_field}

---

##### `preconfiguredApp`<sup>Optional</sup> <a name="preconfiguredApp" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.preconfiguredApp"></a>

```java
public java.lang.String getPreconfiguredApp();
```

- *Type:* java.lang.String

Preconfigured app name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#preconfigured_app SwaApp#preconfigured_app}

---

##### `redirectUrl`<sup>Optional</sup> <a name="redirectUrl" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.redirectUrl"></a>

```java
public java.lang.String getRedirectUrl();
```

- *Type:* java.lang.String

If going to the login page URL redirects to another page, then enter that URL here.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#redirect_url SwaApp#redirect_url}

---

##### `skipGroups`<sup>Optional</sup> <a name="skipGroups" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.skipGroups"></a>

```java
public java.lang.Object getSkipGroups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#skip_groups SwaApp#skip_groups}

---

##### `skipUsers`<sup>Optional</sup> <a name="skipUsers" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.skipUsers"></a>

```java
public java.lang.Object getSkipUsers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#skip_users SwaApp#skip_users}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Status of application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#status SwaApp#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.timeouts"></a>

```java
public SwaAppTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-okta.swaApp.SwaAppTimeouts">SwaAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#timeouts SwaApp#timeouts}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Login URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#url SwaApp#url}

---

##### `urlRegex`<sup>Optional</sup> <a name="urlRegex" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.urlRegex"></a>

```java
public java.lang.String getUrlRegex();
```

- *Type:* java.lang.String

A regex that further restricts URL to the specified regex.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#url_regex SwaApp#url_regex}

---

##### `usernameField`<sup>Optional</sup> <a name="usernameField" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.usernameField"></a>

```java
public java.lang.String getUsernameField();
```

- *Type:* java.lang.String

Login username field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#username_field SwaApp#username_field}

---

##### `userNameTemplate`<sup>Optional</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.userNameTemplate"></a>

```java
public java.lang.String getUserNameTemplate();
```

- *Type:* java.lang.String

Username template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#user_name_template SwaApp#user_name_template}

---

##### `userNameTemplatePushStatus`<sup>Optional</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.userNameTemplatePushStatus"></a>

```java
public java.lang.String getUserNameTemplatePushStatus();
```

- *Type:* java.lang.String

Push username on update.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#user_name_template_push_status SwaApp#user_name_template_push_status}

---

##### `userNameTemplateSuffix`<sup>Optional</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.userNameTemplateSuffix"></a>

```java
public java.lang.String getUserNameTemplateSuffix();
```

- *Type:* java.lang.String

Username template suffix.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#user_name_template_suffix SwaApp#user_name_template_suffix}

---

##### `userNameTemplateType`<sup>Optional</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.userNameTemplateType"></a>

```java
public java.lang.String getUserNameTemplateType();
```

- *Type:* java.lang.String

Username template type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#user_name_template_type SwaApp#user_name_template_type}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-okta.swaApp.SwaAppConfig.property.users"></a>

```java
public java.lang.Object getUsers();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.swaApp.SwaAppUsers">SwaAppUsers</a>>

users block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#users SwaApp#users}

---

### SwaAppTimeouts <a name="SwaAppTimeouts" id="@cdktf/provider-okta.swaApp.SwaAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.swaApp.SwaAppTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.swa_app.SwaAppTimeouts;

SwaAppTimeouts.builder()
//  .create(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#create SwaApp#create}. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#read SwaApp#read}. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#update SwaApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.swaApp.SwaAppTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#create SwaApp#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.swaApp.SwaAppTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#read SwaApp#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.swaApp.SwaAppTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#update SwaApp#update}.

---

### SwaAppUsers <a name="SwaAppUsers" id="@cdktf/provider-okta.swaApp.SwaAppUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.swaApp.SwaAppUsers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.swa_app.SwaAppUsers;

SwaAppUsers.builder()
//  .id(java.lang.String)
//  .password(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsers.property.id">id</a></code> | <code>java.lang.String</code> | User ID. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsers.property.password">password</a></code> | <code>java.lang.String</code> | Password for user application. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsers.property.username">username</a></code> | <code>java.lang.String</code> | Username for user. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.swaApp.SwaAppUsers.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

User ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#id SwaApp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-okta.swaApp.SwaAppUsers.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Password for user application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#password SwaApp#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-okta.swaApp.SwaAppUsers.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Username for user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/swa_app#username SwaApp#username}

---

## Classes <a name="Classes" id="Classes"></a>

### SwaAppTimeoutsOutputReference <a name="SwaAppTimeoutsOutputReference" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.swa_app.SwaAppTimeoutsOutputReference;

new SwaAppTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.swaApp.SwaAppTimeouts">SwaAppTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.swaApp.SwaAppTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-okta.swaApp.SwaAppTimeouts">SwaAppTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---


### SwaAppUsersList <a name="SwaAppUsersList" id="@cdktf/provider-okta.swaApp.SwaAppUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.swaApp.SwaAppUsersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.swa_app.SwaAppUsersList;

new SwaAppUsersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.swaApp.SwaAppUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.swaApp.SwaAppUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.swaApp.SwaAppUsersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.swaApp.SwaAppUsersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.swaApp.SwaAppUsersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.swaApp.SwaAppUsersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.swaApp.SwaAppUsersList.get"></a>

```java
public SwaAppUsersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.swaApp.SwaAppUsersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.swaApp.SwaAppUsers">SwaAppUsers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.swaApp.SwaAppUsersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.swaApp.SwaAppUsersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.swaApp.SwaAppUsersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.swaApp.SwaAppUsers">SwaAppUsers</a>>

---


### SwaAppUsersOutputReference <a name="SwaAppUsersOutputReference" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.swa_app.SwaAppUsersOutputReference;

new SwaAppUsersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.swaApp.SwaAppUsers">SwaAppUsers</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.swaApp.SwaAppUsersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-okta.swaApp.SwaAppUsers">SwaAppUsers</a> OR com.hashicorp.cdktf.IResolvable

---



