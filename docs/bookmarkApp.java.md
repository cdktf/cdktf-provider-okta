# `bookmarkApp` Submodule <a name="`bookmarkApp` Submodule" id="@cdktf/provider-okta.bookmarkApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BookmarkApp <a name="BookmarkApp" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app okta_bookmark_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.bookmark_app.BookmarkApp;

BookmarkApp.Builder.create(Construct scope, java.lang.String id)
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
    .url(java.lang.String)
//  .accessibilityErrorRedirectUrl(java.lang.String)
//  .accessibilityLoginRedirectUrl(java.lang.String)
//  .accessibilitySelfService(java.lang.Boolean)
//  .accessibilitySelfService(IResolvable)
//  .adminNote(java.lang.String)
//  .appLinksJson(java.lang.String)
//  .authenticationPolicy(java.lang.String)
//  .autoSubmitToolbar(java.lang.Boolean)
//  .autoSubmitToolbar(IResolvable)
//  .enduserNote(java.lang.String)
//  .groups(java.util.List<java.lang.String>)
//  .hideIos(java.lang.Boolean)
//  .hideIos(IResolvable)
//  .hideWeb(java.lang.Boolean)
//  .hideWeb(IResolvable)
//  .id(java.lang.String)
//  .logo(java.lang.String)
//  .requestIntegration(java.lang.Boolean)
//  .requestIntegration(IResolvable)
//  .skipGroups(java.lang.Boolean)
//  .skipGroups(IResolvable)
//  .skipUsers(java.lang.Boolean)
//  .skipUsers(IResolvable)
//  .status(java.lang.String)
//  .timeouts(BookmarkAppTimeouts)
//  .users(IResolvable)
//  .users(java.util.List<BookmarkAppUsers>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.label">label</a></code> | <code>java.lang.String</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#url BookmarkApp#url}. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>java.lang.String</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>java.lang.String</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.accessibilitySelfService">accessibilitySelfService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.adminNote">adminNote</a></code> | <code>java.lang.String</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.appLinksJson">appLinksJson</a></code> | <code>java.lang.String</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.authenticationPolicy">authenticationPolicy</a></code> | <code>java.lang.String</code> | Id of this apps authentication policy. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.enduserNote">enduserNote</a></code> | <code>java.lang.String</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.hideIos">hideIos</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.hideWeb">hideWeb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#id BookmarkApp#id}. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.logo">logo</a></code> | <code>java.lang.String</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.requestIntegration">requestIntegration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#request_integration BookmarkApp#request_integration}. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.skipGroups">skipGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.skipUsers">skipUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts">BookmarkAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.users">users</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers">BookmarkAppUsers</a>></code> | users block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.label"></a>

- *Type:* java.lang.String

Pretty name of app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#label BookmarkApp#label}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.url"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#url BookmarkApp#url}.

---

##### `accessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.accessibilityErrorRedirectUrl"></a>

- *Type:* java.lang.String

Custom error page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#accessibility_error_redirect_url BookmarkApp#accessibility_error_redirect_url}

---

##### `accessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.accessibilityLoginRedirectUrl"></a>

- *Type:* java.lang.String

Custom login page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#accessibility_login_redirect_url BookmarkApp#accessibility_login_redirect_url}

---

##### `accessibilitySelfService`<sup>Optional</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.accessibilitySelfService"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable self service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#accessibility_self_service BookmarkApp#accessibility_self_service}

---

##### `adminNote`<sup>Optional</sup> <a name="adminNote" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.adminNote"></a>

- *Type:* java.lang.String

Application notes for admins.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#admin_note BookmarkApp#admin_note}

---

##### `appLinksJson`<sup>Optional</sup> <a name="appLinksJson" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.appLinksJson"></a>

- *Type:* java.lang.String

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#app_links_json BookmarkApp#app_links_json}

---

##### `authenticationPolicy`<sup>Optional</sup> <a name="authenticationPolicy" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.authenticationPolicy"></a>

- *Type:* java.lang.String

Id of this apps authentication policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#authentication_policy BookmarkApp#authentication_policy}

---

##### `autoSubmitToolbar`<sup>Optional</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.autoSubmitToolbar"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#auto_submit_toolbar BookmarkApp#auto_submit_toolbar}

---

##### `enduserNote`<sup>Optional</sup> <a name="enduserNote" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.enduserNote"></a>

- *Type:* java.lang.String

Application notes for end users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#enduser_note BookmarkApp#enduser_note}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.groups"></a>

- *Type:* java.util.List<java.lang.String>

Groups associated with the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#groups BookmarkApp#groups}

---

##### `hideIos`<sup>Optional</sup> <a name="hideIos" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.hideIos"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#hide_ios BookmarkApp#hide_ios}

---

##### `hideWeb`<sup>Optional</sup> <a name="hideWeb" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.hideWeb"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon to users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#hide_web BookmarkApp#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#id BookmarkApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.logo"></a>

- *Type:* java.lang.String

Local path to logo of the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#logo BookmarkApp#logo}

---

##### `requestIntegration`<sup>Optional</sup> <a name="requestIntegration" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.requestIntegration"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#request_integration BookmarkApp#request_integration}.

---

##### `skipGroups`<sup>Optional</sup> <a name="skipGroups" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.skipGroups"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#skip_groups BookmarkApp#skip_groups}

---

##### `skipUsers`<sup>Optional</sup> <a name="skipUsers" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.skipUsers"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#skip_users BookmarkApp#skip_users}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Status of application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#status BookmarkApp#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts">BookmarkAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#timeouts BookmarkApp#timeouts}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.Initializer.parameter.users"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers">BookmarkAppUsers</a>>

users block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#users BookmarkApp#users}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.putUsers">putUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAccessibilityErrorRedirectUrl">resetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAccessibilityLoginRedirectUrl">resetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAccessibilitySelfService">resetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAdminNote">resetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAppLinksJson">resetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAuthenticationPolicy">resetAuthenticationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAutoSubmitToolbar">resetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetEnduserNote">resetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetHideIos">resetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetHideWeb">resetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetLogo">resetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetRequestIntegration">resetRequestIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetSkipGroups">resetSkipGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetSkipUsers">resetSkipUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetUsers">resetUsers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.putTimeouts"></a>

```java
public void putTimeouts(BookmarkAppTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts">BookmarkAppTimeouts</a>

---

##### `putUsers` <a name="putUsers" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.putUsers"></a>

```java
public void putUsers(IResolvable OR java.util.List<BookmarkAppUsers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.putUsers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers">BookmarkAppUsers</a>>

---

##### `resetAccessibilityErrorRedirectUrl` <a name="resetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAccessibilityErrorRedirectUrl"></a>

```java
public void resetAccessibilityErrorRedirectUrl()
```

##### `resetAccessibilityLoginRedirectUrl` <a name="resetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAccessibilityLoginRedirectUrl"></a>

```java
public void resetAccessibilityLoginRedirectUrl()
```

##### `resetAccessibilitySelfService` <a name="resetAccessibilitySelfService" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAccessibilitySelfService"></a>

```java
public void resetAccessibilitySelfService()
```

##### `resetAdminNote` <a name="resetAdminNote" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAdminNote"></a>

```java
public void resetAdminNote()
```

##### `resetAppLinksJson` <a name="resetAppLinksJson" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAppLinksJson"></a>

```java
public void resetAppLinksJson()
```

##### `resetAuthenticationPolicy` <a name="resetAuthenticationPolicy" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAuthenticationPolicy"></a>

```java
public void resetAuthenticationPolicy()
```

##### `resetAutoSubmitToolbar` <a name="resetAutoSubmitToolbar" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetAutoSubmitToolbar"></a>

```java
public void resetAutoSubmitToolbar()
```

##### `resetEnduserNote` <a name="resetEnduserNote" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetEnduserNote"></a>

```java
public void resetEnduserNote()
```

##### `resetGroups` <a name="resetGroups" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetGroups"></a>

```java
public void resetGroups()
```

##### `resetHideIos` <a name="resetHideIos" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetHideIos"></a>

```java
public void resetHideIos()
```

##### `resetHideWeb` <a name="resetHideWeb" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetHideWeb"></a>

```java
public void resetHideWeb()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetId"></a>

```java
public void resetId()
```

##### `resetLogo` <a name="resetLogo" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetLogo"></a>

```java
public void resetLogo()
```

##### `resetRequestIntegration` <a name="resetRequestIntegration" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetRequestIntegration"></a>

```java
public void resetRequestIntegration()
```

##### `resetSkipGroups` <a name="resetSkipGroups" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetSkipGroups"></a>

```java
public void resetSkipGroups()
```

##### `resetSkipUsers` <a name="resetSkipUsers" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetSkipUsers"></a>

```java
public void resetSkipUsers()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUsers` <a name="resetUsers" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.resetUsers"></a>

```java
public void resetUsers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.bookmark_app.BookmarkApp;

BookmarkApp.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.bookmark_app.BookmarkApp;

BookmarkApp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.bookmark_app.BookmarkApp;

BookmarkApp.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.logoUrl">logoUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.signOnMode">signOnMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference">BookmarkAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.users">users</a></code> | <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList">BookmarkAppUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilityErrorRedirectUrlInput">accessibilityErrorRedirectUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilityLoginRedirectUrlInput">accessibilityLoginRedirectUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilitySelfServiceInput">accessibilitySelfServiceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.adminNoteInput">adminNoteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.appLinksJsonInput">appLinksJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.authenticationPolicyInput">authenticationPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.autoSubmitToolbarInput">autoSubmitToolbarInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.enduserNoteInput">enduserNoteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.groupsInput">groupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.hideIosInput">hideIosInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.hideWebInput">hideWebInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.logoInput">logoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.requestIntegrationInput">requestIntegrationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.skipGroupsInput">skipGroupsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.skipUsersInput">skipUsersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts">BookmarkAppTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.usersInput">usersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers">BookmarkAppUsers</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.adminNote">adminNote</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.appLinksJson">appLinksJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.authenticationPolicy">authenticationPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.enduserNote">enduserNote</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.hideIos">hideIos</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.hideWeb">hideWeb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.logo">logo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.requestIntegration">requestIntegration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.skipGroups">skipGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.skipUsers">skipUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `logoUrl`<sup>Required</sup> <a name="logoUrl" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.logoUrl"></a>

```java
public java.lang.String getLogoUrl();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `signOnMode`<sup>Required</sup> <a name="signOnMode" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.signOnMode"></a>

```java
public java.lang.String getSignOnMode();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.timeouts"></a>

```java
public BookmarkAppTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference">BookmarkAppTimeoutsOutputReference</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.users"></a>

```java
public BookmarkAppUsersList getUsers();
```

- *Type:* <a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList">BookmarkAppUsersList</a>

---

##### `accessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilityErrorRedirectUrlInput"></a>

```java
public java.lang.String getAccessibilityErrorRedirectUrlInput();
```

- *Type:* java.lang.String

---

##### `accessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilityLoginRedirectUrlInput"></a>

```java
public java.lang.String getAccessibilityLoginRedirectUrlInput();
```

- *Type:* java.lang.String

---

##### `accessibilitySelfServiceInput`<sup>Optional</sup> <a name="accessibilitySelfServiceInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilitySelfServiceInput"></a>

```java
public java.lang.Object getAccessibilitySelfServiceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `adminNoteInput`<sup>Optional</sup> <a name="adminNoteInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.adminNoteInput"></a>

```java
public java.lang.String getAdminNoteInput();
```

- *Type:* java.lang.String

---

##### `appLinksJsonInput`<sup>Optional</sup> <a name="appLinksJsonInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.appLinksJsonInput"></a>

```java
public java.lang.String getAppLinksJsonInput();
```

- *Type:* java.lang.String

---

##### `authenticationPolicyInput`<sup>Optional</sup> <a name="authenticationPolicyInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.authenticationPolicyInput"></a>

```java
public java.lang.String getAuthenticationPolicyInput();
```

- *Type:* java.lang.String

---

##### `autoSubmitToolbarInput`<sup>Optional</sup> <a name="autoSubmitToolbarInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.autoSubmitToolbarInput"></a>

```java
public java.lang.Object getAutoSubmitToolbarInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enduserNoteInput`<sup>Optional</sup> <a name="enduserNoteInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.enduserNoteInput"></a>

```java
public java.lang.String getEnduserNoteInput();
```

- *Type:* java.lang.String

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.groupsInput"></a>

```java
public java.util.List<java.lang.String> getGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hideIosInput`<sup>Optional</sup> <a name="hideIosInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.hideIosInput"></a>

```java
public java.lang.Object getHideIosInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hideWebInput`<sup>Optional</sup> <a name="hideWebInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.hideWebInput"></a>

```java
public java.lang.Object getHideWebInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `logoInput`<sup>Optional</sup> <a name="logoInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.logoInput"></a>

```java
public java.lang.String getLogoInput();
```

- *Type:* java.lang.String

---

##### `requestIntegrationInput`<sup>Optional</sup> <a name="requestIntegrationInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.requestIntegrationInput"></a>

```java
public java.lang.Object getRequestIntegrationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipGroupsInput`<sup>Optional</sup> <a name="skipGroupsInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.skipGroupsInput"></a>

```java
public java.lang.Object getSkipGroupsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipUsersInput`<sup>Optional</sup> <a name="skipUsersInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.skipUsersInput"></a>

```java
public java.lang.Object getSkipUsersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts">BookmarkAppTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.usersInput"></a>

```java
public java.lang.Object getUsersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers">BookmarkAppUsers</a>>

---

##### `accessibilityErrorRedirectUrl`<sup>Required</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilityErrorRedirectUrl"></a>

```java
public java.lang.String getAccessibilityErrorRedirectUrl();
```

- *Type:* java.lang.String

---

##### `accessibilityLoginRedirectUrl`<sup>Required</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilityLoginRedirectUrl"></a>

```java
public java.lang.String getAccessibilityLoginRedirectUrl();
```

- *Type:* java.lang.String

---

##### `accessibilitySelfService`<sup>Required</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.accessibilitySelfService"></a>

```java
public java.lang.Object getAccessibilitySelfService();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `adminNote`<sup>Required</sup> <a name="adminNote" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.adminNote"></a>

```java
public java.lang.String getAdminNote();
```

- *Type:* java.lang.String

---

##### `appLinksJson`<sup>Required</sup> <a name="appLinksJson" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.appLinksJson"></a>

```java
public java.lang.String getAppLinksJson();
```

- *Type:* java.lang.String

---

##### `authenticationPolicy`<sup>Required</sup> <a name="authenticationPolicy" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.authenticationPolicy"></a>

```java
public java.lang.String getAuthenticationPolicy();
```

- *Type:* java.lang.String

---

##### `autoSubmitToolbar`<sup>Required</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.autoSubmitToolbar"></a>

```java
public java.lang.Object getAutoSubmitToolbar();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enduserNote`<sup>Required</sup> <a name="enduserNote" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.enduserNote"></a>

```java
public java.lang.String getEnduserNote();
```

- *Type:* java.lang.String

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.groups"></a>

```java
public java.util.List<java.lang.String> getGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hideIos`<sup>Required</sup> <a name="hideIos" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.hideIos"></a>

```java
public java.lang.Object getHideIos();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hideWeb`<sup>Required</sup> <a name="hideWeb" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.hideWeb"></a>

```java
public java.lang.Object getHideWeb();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.logo"></a>

```java
public java.lang.String getLogo();
```

- *Type:* java.lang.String

---

##### `requestIntegration`<sup>Required</sup> <a name="requestIntegration" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.requestIntegration"></a>

```java
public java.lang.Object getRequestIntegration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipGroups`<sup>Required</sup> <a name="skipGroups" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.skipGroups"></a>

```java
public java.lang.Object getSkipGroups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipUsers`<sup>Required</sup> <a name="skipUsers" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.skipUsers"></a>

```java
public java.lang.Object getSkipUsers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.bookmarkApp.BookmarkApp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BookmarkAppConfig <a name="BookmarkAppConfig" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.bookmark_app.BookmarkAppConfig;

BookmarkAppConfig.builder()
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
    .url(java.lang.String)
//  .accessibilityErrorRedirectUrl(java.lang.String)
//  .accessibilityLoginRedirectUrl(java.lang.String)
//  .accessibilitySelfService(java.lang.Boolean)
//  .accessibilitySelfService(IResolvable)
//  .adminNote(java.lang.String)
//  .appLinksJson(java.lang.String)
//  .authenticationPolicy(java.lang.String)
//  .autoSubmitToolbar(java.lang.Boolean)
//  .autoSubmitToolbar(IResolvable)
//  .enduserNote(java.lang.String)
//  .groups(java.util.List<java.lang.String>)
//  .hideIos(java.lang.Boolean)
//  .hideIos(IResolvable)
//  .hideWeb(java.lang.Boolean)
//  .hideWeb(IResolvable)
//  .id(java.lang.String)
//  .logo(java.lang.String)
//  .requestIntegration(java.lang.Boolean)
//  .requestIntegration(IResolvable)
//  .skipGroups(java.lang.Boolean)
//  .skipGroups(IResolvable)
//  .skipUsers(java.lang.Boolean)
//  .skipUsers(IResolvable)
//  .status(java.lang.String)
//  .timeouts(BookmarkAppTimeouts)
//  .users(IResolvable)
//  .users(java.util.List<BookmarkAppUsers>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.label">label</a></code> | <code>java.lang.String</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#url BookmarkApp#url}. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>java.lang.String</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>java.lang.String</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.adminNote">adminNote</a></code> | <code>java.lang.String</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.appLinksJson">appLinksJson</a></code> | <code>java.lang.String</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.authenticationPolicy">authenticationPolicy</a></code> | <code>java.lang.String</code> | Id of this apps authentication policy. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.enduserNote">enduserNote</a></code> | <code>java.lang.String</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.hideIos">hideIos</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.hideWeb">hideWeb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#id BookmarkApp#id}. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.logo">logo</a></code> | <code>java.lang.String</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.requestIntegration">requestIntegration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#request_integration BookmarkApp#request_integration}. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.skipGroups">skipGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.skipUsers">skipUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.status">status</a></code> | <code>java.lang.String</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts">BookmarkAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.users">users</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers">BookmarkAppUsers</a>></code> | users block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Pretty name of app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#label BookmarkApp#label}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#url BookmarkApp#url}.

---

##### `accessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.accessibilityErrorRedirectUrl"></a>

```java
public java.lang.String getAccessibilityErrorRedirectUrl();
```

- *Type:* java.lang.String

Custom error page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#accessibility_error_redirect_url BookmarkApp#accessibility_error_redirect_url}

---

##### `accessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.accessibilityLoginRedirectUrl"></a>

```java
public java.lang.String getAccessibilityLoginRedirectUrl();
```

- *Type:* java.lang.String

Custom login page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#accessibility_login_redirect_url BookmarkApp#accessibility_login_redirect_url}

---

##### `accessibilitySelfService`<sup>Optional</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.accessibilitySelfService"></a>

```java
public java.lang.Object getAccessibilitySelfService();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable self service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#accessibility_self_service BookmarkApp#accessibility_self_service}

---

##### `adminNote`<sup>Optional</sup> <a name="adminNote" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.adminNote"></a>

```java
public java.lang.String getAdminNote();
```

- *Type:* java.lang.String

Application notes for admins.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#admin_note BookmarkApp#admin_note}

---

##### `appLinksJson`<sup>Optional</sup> <a name="appLinksJson" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.appLinksJson"></a>

```java
public java.lang.String getAppLinksJson();
```

- *Type:* java.lang.String

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#app_links_json BookmarkApp#app_links_json}

---

##### `authenticationPolicy`<sup>Optional</sup> <a name="authenticationPolicy" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.authenticationPolicy"></a>

```java
public java.lang.String getAuthenticationPolicy();
```

- *Type:* java.lang.String

Id of this apps authentication policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#authentication_policy BookmarkApp#authentication_policy}

---

##### `autoSubmitToolbar`<sup>Optional</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.autoSubmitToolbar"></a>

```java
public java.lang.Object getAutoSubmitToolbar();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#auto_submit_toolbar BookmarkApp#auto_submit_toolbar}

---

##### `enduserNote`<sup>Optional</sup> <a name="enduserNote" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.enduserNote"></a>

```java
public java.lang.String getEnduserNote();
```

- *Type:* java.lang.String

Application notes for end users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#enduser_note BookmarkApp#enduser_note}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.groups"></a>

```java
public java.util.List<java.lang.String> getGroups();
```

- *Type:* java.util.List<java.lang.String>

Groups associated with the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#groups BookmarkApp#groups}

---

##### `hideIos`<sup>Optional</sup> <a name="hideIos" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.hideIos"></a>

```java
public java.lang.Object getHideIos();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#hide_ios BookmarkApp#hide_ios}

---

##### `hideWeb`<sup>Optional</sup> <a name="hideWeb" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.hideWeb"></a>

```java
public java.lang.Object getHideWeb();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon to users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#hide_web BookmarkApp#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#id BookmarkApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.logo"></a>

```java
public java.lang.String getLogo();
```

- *Type:* java.lang.String

Local path to logo of the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#logo BookmarkApp#logo}

---

##### `requestIntegration`<sup>Optional</sup> <a name="requestIntegration" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.requestIntegration"></a>

```java
public java.lang.Object getRequestIntegration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#request_integration BookmarkApp#request_integration}.

---

##### `skipGroups`<sup>Optional</sup> <a name="skipGroups" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.skipGroups"></a>

```java
public java.lang.Object getSkipGroups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#skip_groups BookmarkApp#skip_groups}

---

##### `skipUsers`<sup>Optional</sup> <a name="skipUsers" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.skipUsers"></a>

```java
public java.lang.Object getSkipUsers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#skip_users BookmarkApp#skip_users}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Status of application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#status BookmarkApp#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.timeouts"></a>

```java
public BookmarkAppTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts">BookmarkAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#timeouts BookmarkApp#timeouts}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppConfig.property.users"></a>

```java
public java.lang.Object getUsers();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers">BookmarkAppUsers</a>>

users block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#users BookmarkApp#users}

---

### BookmarkAppTimeouts <a name="BookmarkAppTimeouts" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.bookmark_app.BookmarkAppTimeouts;

BookmarkAppTimeouts.builder()
//  .create(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#create BookmarkApp#create}. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#read BookmarkApp#read}. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#update BookmarkApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#create BookmarkApp#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#read BookmarkApp#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#update BookmarkApp#update}.

---

### BookmarkAppUsers <a name="BookmarkAppUsers" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.bookmark_app.BookmarkAppUsers;

BookmarkAppUsers.builder()
//  .id(java.lang.String)
//  .password(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers.property.id">id</a></code> | <code>java.lang.String</code> | User ID. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers.property.password">password</a></code> | <code>java.lang.String</code> | Password for user application. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers.property.username">username</a></code> | <code>java.lang.String</code> | Username for user. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

User ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#id BookmarkApp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Password for user application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#password BookmarkApp#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Username for user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/bookmark_app#username BookmarkApp#username}

---

## Classes <a name="Classes" id="Classes"></a>

### BookmarkAppTimeoutsOutputReference <a name="BookmarkAppTimeoutsOutputReference" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.bookmark_app.BookmarkAppTimeoutsOutputReference;

new BookmarkAppTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts">BookmarkAppTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppTimeouts">BookmarkAppTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---


### BookmarkAppUsersList <a name="BookmarkAppUsersList" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.bookmark_app.BookmarkAppUsersList;

new BookmarkAppUsersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.get"></a>

```java
public BookmarkAppUsersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers">BookmarkAppUsers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers">BookmarkAppUsers</a>>

---


### BookmarkAppUsersOutputReference <a name="BookmarkAppUsersOutputReference" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.bookmark_app.BookmarkAppUsersOutputReference;

new BookmarkAppUsersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers">BookmarkAppUsers</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.bookmarkApp.BookmarkAppUsersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-okta.bookmarkApp.BookmarkAppUsers">BookmarkAppUsers</a> OR com.hashicorp.cdktf.IResolvable

---



