# `okta_secure_password_store_app`

Refer to the Terraform Registory for docs: [`okta_secure_password_store_app`](https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app).

# `securePasswordStoreApp` Submodule <a name="`securePasswordStoreApp` Submodule" id="@cdktf/provider-okta.securePasswordStoreApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurePasswordStoreApp <a name="SecurePasswordStoreApp" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app okta_secure_password_store_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.secure_password_store_app.SecurePasswordStoreApp;

SecurePasswordStoreApp.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .label(java.lang.String)
    .passwordField(java.lang.String)
    .url(java.lang.String)
    .usernameField(java.lang.String)
//  .accessibilityErrorRedirectUrl(java.lang.String)
//  .accessibilityLoginRedirectUrl(java.lang.String)
//  .accessibilitySelfService(java.lang.Boolean)
//  .accessibilitySelfService(IResolvable)
//  .adminNote(java.lang.String)
//  .appLinksJson(java.lang.String)
//  .autoSubmitToolbar(java.lang.Boolean)
//  .autoSubmitToolbar(IResolvable)
//  .credentialsScheme(java.lang.String)
//  .enduserNote(java.lang.String)
//  .groups(java.util.List<java.lang.String>)
//  .hideIos(java.lang.Boolean)
//  .hideIos(IResolvable)
//  .hideWeb(java.lang.Boolean)
//  .hideWeb(IResolvable)
//  .id(java.lang.String)
//  .logo(java.lang.String)
//  .optionalField1(java.lang.String)
//  .optionalField1Value(java.lang.String)
//  .optionalField2(java.lang.String)
//  .optionalField2Value(java.lang.String)
//  .optionalField3(java.lang.String)
//  .optionalField3Value(java.lang.String)
//  .revealPassword(java.lang.Boolean)
//  .revealPassword(IResolvable)
//  .sharedPassword(java.lang.String)
//  .sharedUsername(java.lang.String)
//  .skipGroups(java.lang.Boolean)
//  .skipGroups(IResolvable)
//  .skipUsers(java.lang.Boolean)
//  .skipUsers(IResolvable)
//  .status(java.lang.String)
//  .timeouts(SecurePasswordStoreAppTimeouts)
//  .userNameTemplate(java.lang.String)
//  .userNameTemplatePushStatus(java.lang.String)
//  .userNameTemplateSuffix(java.lang.String)
//  .userNameTemplateType(java.lang.String)
//  .users(IResolvable)
//  .users(java.util.List<SecurePasswordStoreAppUsers>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.label">label</a></code> | <code>java.lang.String</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.passwordField">passwordField</a></code> | <code>java.lang.String</code> | Login password field. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.url">url</a></code> | <code>java.lang.String</code> | Login URL. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.usernameField">usernameField</a></code> | <code>java.lang.String</code> | Login username field. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>java.lang.String</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>java.lang.String</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.accessibilitySelfService">accessibilitySelfService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.adminNote">adminNote</a></code> | <code>java.lang.String</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.appLinksJson">appLinksJson</a></code> | <code>java.lang.String</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.credentialsScheme">credentialsScheme</a></code> | <code>java.lang.String</code> | Application credentials scheme. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.enduserNote">enduserNote</a></code> | <code>java.lang.String</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.hideIos">hideIos</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.hideWeb">hideWeb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#id SecurePasswordStoreApp#id}. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.logo">logo</a></code> | <code>java.lang.String</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.optionalField1">optionalField1</a></code> | <code>java.lang.String</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.optionalField1Value">optionalField1Value</a></code> | <code>java.lang.String</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.optionalField2">optionalField2</a></code> | <code>java.lang.String</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.optionalField2Value">optionalField2Value</a></code> | <code>java.lang.String</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.optionalField3">optionalField3</a></code> | <code>java.lang.String</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.optionalField3Value">optionalField3Value</a></code> | <code>java.lang.String</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.revealPassword">revealPassword</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow user to reveal password. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.sharedPassword">sharedPassword</a></code> | <code>java.lang.String</code> | Shared password, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.sharedUsername">sharedUsername</a></code> | <code>java.lang.String</code> | Shared username, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.skipGroups">skipGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.skipUsers">skipUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts">SecurePasswordStoreAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.userNameTemplate">userNameTemplate</a></code> | <code>java.lang.String</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>java.lang.String</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>java.lang.String</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.userNameTemplateType">userNameTemplateType</a></code> | <code>java.lang.String</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.users">users</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers">SecurePasswordStoreAppUsers</a>></code> | users block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.label"></a>

- *Type:* java.lang.String

Pretty name of app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#label SecurePasswordStoreApp#label}

---

##### `passwordField`<sup>Required</sup> <a name="passwordField" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.passwordField"></a>

- *Type:* java.lang.String

Login password field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#password_field SecurePasswordStoreApp#password_field}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.url"></a>

- *Type:* java.lang.String

Login URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#url SecurePasswordStoreApp#url}

---

##### `usernameField`<sup>Required</sup> <a name="usernameField" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.usernameField"></a>

- *Type:* java.lang.String

Login username field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#username_field SecurePasswordStoreApp#username_field}

---

##### `accessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.accessibilityErrorRedirectUrl"></a>

- *Type:* java.lang.String

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#accessibility_error_redirect_url SecurePasswordStoreApp#accessibility_error_redirect_url}

---

##### `accessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.accessibilityLoginRedirectUrl"></a>

- *Type:* java.lang.String

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#accessibility_login_redirect_url SecurePasswordStoreApp#accessibility_login_redirect_url}

---

##### `accessibilitySelfService`<sup>Optional</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.accessibilitySelfService"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable self service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#accessibility_self_service SecurePasswordStoreApp#accessibility_self_service}

---

##### `adminNote`<sup>Optional</sup> <a name="adminNote" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.adminNote"></a>

- *Type:* java.lang.String

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#admin_note SecurePasswordStoreApp#admin_note}

---

##### `appLinksJson`<sup>Optional</sup> <a name="appLinksJson" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.appLinksJson"></a>

- *Type:* java.lang.String

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#app_links_json SecurePasswordStoreApp#app_links_json}

---

##### `autoSubmitToolbar`<sup>Optional</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.autoSubmitToolbar"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#auto_submit_toolbar SecurePasswordStoreApp#auto_submit_toolbar}

---

##### `credentialsScheme`<sup>Optional</sup> <a name="credentialsScheme" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.credentialsScheme"></a>

- *Type:* java.lang.String

Application credentials scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#credentials_scheme SecurePasswordStoreApp#credentials_scheme}

---

##### `enduserNote`<sup>Optional</sup> <a name="enduserNote" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.enduserNote"></a>

- *Type:* java.lang.String

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#enduser_note SecurePasswordStoreApp#enduser_note}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.groups"></a>

- *Type:* java.util.List<java.lang.String>

Groups associated with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#groups SecurePasswordStoreApp#groups}

---

##### `hideIos`<sup>Optional</sup> <a name="hideIos" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.hideIos"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#hide_ios SecurePasswordStoreApp#hide_ios}

---

##### `hideWeb`<sup>Optional</sup> <a name="hideWeb" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.hideWeb"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#hide_web SecurePasswordStoreApp#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#id SecurePasswordStoreApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.logo"></a>

- *Type:* java.lang.String

Local path to logo of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#logo SecurePasswordStoreApp#logo}

---

##### `optionalField1`<sup>Optional</sup> <a name="optionalField1" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.optionalField1"></a>

- *Type:* java.lang.String

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#optional_field1 SecurePasswordStoreApp#optional_field1}

---

##### `optionalField1Value`<sup>Optional</sup> <a name="optionalField1Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.optionalField1Value"></a>

- *Type:* java.lang.String

Name of optional value in login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#optional_field1_value SecurePasswordStoreApp#optional_field1_value}

---

##### `optionalField2`<sup>Optional</sup> <a name="optionalField2" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.optionalField2"></a>

- *Type:* java.lang.String

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#optional_field2 SecurePasswordStoreApp#optional_field2}

---

##### `optionalField2Value`<sup>Optional</sup> <a name="optionalField2Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.optionalField2Value"></a>

- *Type:* java.lang.String

Name of optional value in login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#optional_field2_value SecurePasswordStoreApp#optional_field2_value}

---

##### `optionalField3`<sup>Optional</sup> <a name="optionalField3" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.optionalField3"></a>

- *Type:* java.lang.String

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#optional_field3 SecurePasswordStoreApp#optional_field3}

---

##### `optionalField3Value`<sup>Optional</sup> <a name="optionalField3Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.optionalField3Value"></a>

- *Type:* java.lang.String

Name of optional value in login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#optional_field3_value SecurePasswordStoreApp#optional_field3_value}

---

##### `revealPassword`<sup>Optional</sup> <a name="revealPassword" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.revealPassword"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow user to reveal password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#reveal_password SecurePasswordStoreApp#reveal_password}

---

##### `sharedPassword`<sup>Optional</sup> <a name="sharedPassword" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.sharedPassword"></a>

- *Type:* java.lang.String

Shared password, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#shared_password SecurePasswordStoreApp#shared_password}

---

##### `sharedUsername`<sup>Optional</sup> <a name="sharedUsername" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.sharedUsername"></a>

- *Type:* java.lang.String

Shared username, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#shared_username SecurePasswordStoreApp#shared_username}

---

##### `skipGroups`<sup>Optional</sup> <a name="skipGroups" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.skipGroups"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#skip_groups SecurePasswordStoreApp#skip_groups}

---

##### `skipUsers`<sup>Optional</sup> <a name="skipUsers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.skipUsers"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#skip_users SecurePasswordStoreApp#skip_users}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Status of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#status SecurePasswordStoreApp#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts">SecurePasswordStoreAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#timeouts SecurePasswordStoreApp#timeouts}

---

##### `userNameTemplate`<sup>Optional</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.userNameTemplate"></a>

- *Type:* java.lang.String

Username template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#user_name_template SecurePasswordStoreApp#user_name_template}

---

##### `userNameTemplatePushStatus`<sup>Optional</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.userNameTemplatePushStatus"></a>

- *Type:* java.lang.String

Push username on update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#user_name_template_push_status SecurePasswordStoreApp#user_name_template_push_status}

---

##### `userNameTemplateSuffix`<sup>Optional</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.userNameTemplateSuffix"></a>

- *Type:* java.lang.String

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#user_name_template_suffix SecurePasswordStoreApp#user_name_template_suffix}

---

##### `userNameTemplateType`<sup>Optional</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.userNameTemplateType"></a>

- *Type:* java.lang.String

Username template type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#user_name_template_type SecurePasswordStoreApp#user_name_template_type}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.Initializer.parameter.users"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers">SecurePasswordStoreAppUsers</a>>

users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#users SecurePasswordStoreApp#users}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.putUsers">putUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAccessibilityErrorRedirectUrl">resetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAccessibilityLoginRedirectUrl">resetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAccessibilitySelfService">resetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAdminNote">resetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAppLinksJson">resetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAutoSubmitToolbar">resetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetCredentialsScheme">resetCredentialsScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetEnduserNote">resetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetHideIos">resetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetHideWeb">resetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetLogo">resetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField1">resetOptionalField1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField1Value">resetOptionalField1Value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField2">resetOptionalField2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField2Value">resetOptionalField2Value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField3">resetOptionalField3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField3Value">resetOptionalField3Value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetRevealPassword">resetRevealPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSharedPassword">resetSharedPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSharedUsername">resetSharedUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSkipGroups">resetSkipGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSkipUsers">resetSkipUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplate">resetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplatePushStatus">resetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplateSuffix">resetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplateType">resetUserNameTemplateType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUsers">resetUsers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.putTimeouts"></a>

```java
public void putTimeouts(SecurePasswordStoreAppTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts">SecurePasswordStoreAppTimeouts</a>

---

##### `putUsers` <a name="putUsers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.putUsers"></a>

```java
public void putUsers(IResolvable OR java.util.List<SecurePasswordStoreAppUsers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.putUsers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers">SecurePasswordStoreAppUsers</a>>

---

##### `resetAccessibilityErrorRedirectUrl` <a name="resetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAccessibilityErrorRedirectUrl"></a>

```java
public void resetAccessibilityErrorRedirectUrl()
```

##### `resetAccessibilityLoginRedirectUrl` <a name="resetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAccessibilityLoginRedirectUrl"></a>

```java
public void resetAccessibilityLoginRedirectUrl()
```

##### `resetAccessibilitySelfService` <a name="resetAccessibilitySelfService" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAccessibilitySelfService"></a>

```java
public void resetAccessibilitySelfService()
```

##### `resetAdminNote` <a name="resetAdminNote" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAdminNote"></a>

```java
public void resetAdminNote()
```

##### `resetAppLinksJson` <a name="resetAppLinksJson" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAppLinksJson"></a>

```java
public void resetAppLinksJson()
```

##### `resetAutoSubmitToolbar` <a name="resetAutoSubmitToolbar" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetAutoSubmitToolbar"></a>

```java
public void resetAutoSubmitToolbar()
```

##### `resetCredentialsScheme` <a name="resetCredentialsScheme" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetCredentialsScheme"></a>

```java
public void resetCredentialsScheme()
```

##### `resetEnduserNote` <a name="resetEnduserNote" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetEnduserNote"></a>

```java
public void resetEnduserNote()
```

##### `resetGroups` <a name="resetGroups" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetGroups"></a>

```java
public void resetGroups()
```

##### `resetHideIos` <a name="resetHideIos" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetHideIos"></a>

```java
public void resetHideIos()
```

##### `resetHideWeb` <a name="resetHideWeb" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetHideWeb"></a>

```java
public void resetHideWeb()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetId"></a>

```java
public void resetId()
```

##### `resetLogo` <a name="resetLogo" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetLogo"></a>

```java
public void resetLogo()
```

##### `resetOptionalField1` <a name="resetOptionalField1" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField1"></a>

```java
public void resetOptionalField1()
```

##### `resetOptionalField1Value` <a name="resetOptionalField1Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField1Value"></a>

```java
public void resetOptionalField1Value()
```

##### `resetOptionalField2` <a name="resetOptionalField2" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField2"></a>

```java
public void resetOptionalField2()
```

##### `resetOptionalField2Value` <a name="resetOptionalField2Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField2Value"></a>

```java
public void resetOptionalField2Value()
```

##### `resetOptionalField3` <a name="resetOptionalField3" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField3"></a>

```java
public void resetOptionalField3()
```

##### `resetOptionalField3Value` <a name="resetOptionalField3Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetOptionalField3Value"></a>

```java
public void resetOptionalField3Value()
```

##### `resetRevealPassword` <a name="resetRevealPassword" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetRevealPassword"></a>

```java
public void resetRevealPassword()
```

##### `resetSharedPassword` <a name="resetSharedPassword" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSharedPassword"></a>

```java
public void resetSharedPassword()
```

##### `resetSharedUsername` <a name="resetSharedUsername" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSharedUsername"></a>

```java
public void resetSharedUsername()
```

##### `resetSkipGroups` <a name="resetSkipGroups" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSkipGroups"></a>

```java
public void resetSkipGroups()
```

##### `resetSkipUsers` <a name="resetSkipUsers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetSkipUsers"></a>

```java
public void resetSkipUsers()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserNameTemplate` <a name="resetUserNameTemplate" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplate"></a>

```java
public void resetUserNameTemplate()
```

##### `resetUserNameTemplatePushStatus` <a name="resetUserNameTemplatePushStatus" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplatePushStatus"></a>

```java
public void resetUserNameTemplatePushStatus()
```

##### `resetUserNameTemplateSuffix` <a name="resetUserNameTemplateSuffix" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplateSuffix"></a>

```java
public void resetUserNameTemplateSuffix()
```

##### `resetUserNameTemplateType` <a name="resetUserNameTemplateType" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUserNameTemplateType"></a>

```java
public void resetUserNameTemplateType()
```

##### `resetUsers` <a name="resetUsers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.resetUsers"></a>

```java
public void resetUsers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.secure_password_store_app.SecurePasswordStoreApp;

SecurePasswordStoreApp.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.secure_password_store_app.SecurePasswordStoreApp;

SecurePasswordStoreApp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.secure_password_store_app.SecurePasswordStoreApp;

SecurePasswordStoreApp.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.logoUrl">logoUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.signOnMode">signOnMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference">SecurePasswordStoreAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.users">users</a></code> | <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList">SecurePasswordStoreAppUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityErrorRedirectUrlInput">accessibilityErrorRedirectUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityLoginRedirectUrlInput">accessibilityLoginRedirectUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilitySelfServiceInput">accessibilitySelfServiceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.adminNoteInput">adminNoteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.appLinksJsonInput">appLinksJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.autoSubmitToolbarInput">autoSubmitToolbarInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.credentialsSchemeInput">credentialsSchemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.enduserNoteInput">enduserNoteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.groupsInput">groupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideIosInput">hideIosInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideWebInput">hideWebInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.logoInput">logoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1Input">optionalField1Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1ValueInput">optionalField1ValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2Input">optionalField2Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2ValueInput">optionalField2ValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3Input">optionalField3Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3ValueInput">optionalField3ValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.passwordFieldInput">passwordFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.revealPasswordInput">revealPasswordInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedPasswordInput">sharedPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedUsernameInput">sharedUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipGroupsInput">skipGroupsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipUsersInput">skipUsersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts">SecurePasswordStoreAppTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.usernameFieldInput">usernameFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateInput">userNameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplatePushStatusInput">userNameTemplatePushStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateSuffixInput">userNameTemplateSuffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateTypeInput">userNameTemplateTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.usersInput">usersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers">SecurePasswordStoreAppUsers</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.adminNote">adminNote</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.appLinksJson">appLinksJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.credentialsScheme">credentialsScheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.enduserNote">enduserNote</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideIos">hideIos</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideWeb">hideWeb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.logo">logo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1">optionalField1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1Value">optionalField1Value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2">optionalField2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2Value">optionalField2Value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3">optionalField3</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3Value">optionalField3Value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.passwordField">passwordField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.revealPassword">revealPassword</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedPassword">sharedPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedUsername">sharedUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipGroups">skipGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipUsers">skipUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.usernameField">usernameField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplate">userNameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateType">userNameTemplateType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `logoUrl`<sup>Required</sup> <a name="logoUrl" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.logoUrl"></a>

```java
public java.lang.String getLogoUrl();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `signOnMode`<sup>Required</sup> <a name="signOnMode" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.signOnMode"></a>

```java
public java.lang.String getSignOnMode();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.timeouts"></a>

```java
public SecurePasswordStoreAppTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference">SecurePasswordStoreAppTimeoutsOutputReference</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.users"></a>

```java
public SecurePasswordStoreAppUsersList getUsers();
```

- *Type:* <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList">SecurePasswordStoreAppUsersList</a>

---

##### `accessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityErrorRedirectUrlInput"></a>

```java
public java.lang.String getAccessibilityErrorRedirectUrlInput();
```

- *Type:* java.lang.String

---

##### `accessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityLoginRedirectUrlInput"></a>

```java
public java.lang.String getAccessibilityLoginRedirectUrlInput();
```

- *Type:* java.lang.String

---

##### `accessibilitySelfServiceInput`<sup>Optional</sup> <a name="accessibilitySelfServiceInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilitySelfServiceInput"></a>

```java
public java.lang.Object getAccessibilitySelfServiceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `adminNoteInput`<sup>Optional</sup> <a name="adminNoteInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.adminNoteInput"></a>

```java
public java.lang.String getAdminNoteInput();
```

- *Type:* java.lang.String

---

##### `appLinksJsonInput`<sup>Optional</sup> <a name="appLinksJsonInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.appLinksJsonInput"></a>

```java
public java.lang.String getAppLinksJsonInput();
```

- *Type:* java.lang.String

---

##### `autoSubmitToolbarInput`<sup>Optional</sup> <a name="autoSubmitToolbarInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.autoSubmitToolbarInput"></a>

```java
public java.lang.Object getAutoSubmitToolbarInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `credentialsSchemeInput`<sup>Optional</sup> <a name="credentialsSchemeInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.credentialsSchemeInput"></a>

```java
public java.lang.String getCredentialsSchemeInput();
```

- *Type:* java.lang.String

---

##### `enduserNoteInput`<sup>Optional</sup> <a name="enduserNoteInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.enduserNoteInput"></a>

```java
public java.lang.String getEnduserNoteInput();
```

- *Type:* java.lang.String

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.groupsInput"></a>

```java
public java.util.List<java.lang.String> getGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hideIosInput`<sup>Optional</sup> <a name="hideIosInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideIosInput"></a>

```java
public java.lang.Object getHideIosInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hideWebInput`<sup>Optional</sup> <a name="hideWebInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideWebInput"></a>

```java
public java.lang.Object getHideWebInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `logoInput`<sup>Optional</sup> <a name="logoInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.logoInput"></a>

```java
public java.lang.String getLogoInput();
```

- *Type:* java.lang.String

---

##### `optionalField1Input`<sup>Optional</sup> <a name="optionalField1Input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1Input"></a>

```java
public java.lang.String getOptionalField1Input();
```

- *Type:* java.lang.String

---

##### `optionalField1ValueInput`<sup>Optional</sup> <a name="optionalField1ValueInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1ValueInput"></a>

```java
public java.lang.String getOptionalField1ValueInput();
```

- *Type:* java.lang.String

---

##### `optionalField2Input`<sup>Optional</sup> <a name="optionalField2Input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2Input"></a>

```java
public java.lang.String getOptionalField2Input();
```

- *Type:* java.lang.String

---

##### `optionalField2ValueInput`<sup>Optional</sup> <a name="optionalField2ValueInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2ValueInput"></a>

```java
public java.lang.String getOptionalField2ValueInput();
```

- *Type:* java.lang.String

---

##### `optionalField3Input`<sup>Optional</sup> <a name="optionalField3Input" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3Input"></a>

```java
public java.lang.String getOptionalField3Input();
```

- *Type:* java.lang.String

---

##### `optionalField3ValueInput`<sup>Optional</sup> <a name="optionalField3ValueInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3ValueInput"></a>

```java
public java.lang.String getOptionalField3ValueInput();
```

- *Type:* java.lang.String

---

##### `passwordFieldInput`<sup>Optional</sup> <a name="passwordFieldInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.passwordFieldInput"></a>

```java
public java.lang.String getPasswordFieldInput();
```

- *Type:* java.lang.String

---

##### `revealPasswordInput`<sup>Optional</sup> <a name="revealPasswordInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.revealPasswordInput"></a>

```java
public java.lang.Object getRevealPasswordInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sharedPasswordInput`<sup>Optional</sup> <a name="sharedPasswordInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedPasswordInput"></a>

```java
public java.lang.String getSharedPasswordInput();
```

- *Type:* java.lang.String

---

##### `sharedUsernameInput`<sup>Optional</sup> <a name="sharedUsernameInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedUsernameInput"></a>

```java
public java.lang.String getSharedUsernameInput();
```

- *Type:* java.lang.String

---

##### `skipGroupsInput`<sup>Optional</sup> <a name="skipGroupsInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipGroupsInput"></a>

```java
public java.lang.Object getSkipGroupsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipUsersInput`<sup>Optional</sup> <a name="skipUsersInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipUsersInput"></a>

```java
public java.lang.Object getSkipUsersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts">SecurePasswordStoreAppTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `usernameFieldInput`<sup>Optional</sup> <a name="usernameFieldInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.usernameFieldInput"></a>

```java
public java.lang.String getUsernameFieldInput();
```

- *Type:* java.lang.String

---

##### `userNameTemplateInput`<sup>Optional</sup> <a name="userNameTemplateInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateInput"></a>

```java
public java.lang.String getUserNameTemplateInput();
```

- *Type:* java.lang.String

---

##### `userNameTemplatePushStatusInput`<sup>Optional</sup> <a name="userNameTemplatePushStatusInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplatePushStatusInput"></a>

```java
public java.lang.String getUserNameTemplatePushStatusInput();
```

- *Type:* java.lang.String

---

##### `userNameTemplateSuffixInput`<sup>Optional</sup> <a name="userNameTemplateSuffixInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateSuffixInput"></a>

```java
public java.lang.String getUserNameTemplateSuffixInput();
```

- *Type:* java.lang.String

---

##### `userNameTemplateTypeInput`<sup>Optional</sup> <a name="userNameTemplateTypeInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateTypeInput"></a>

```java
public java.lang.String getUserNameTemplateTypeInput();
```

- *Type:* java.lang.String

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.usersInput"></a>

```java
public java.lang.Object getUsersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers">SecurePasswordStoreAppUsers</a>>

---

##### `accessibilityErrorRedirectUrl`<sup>Required</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityErrorRedirectUrl"></a>

```java
public java.lang.String getAccessibilityErrorRedirectUrl();
```

- *Type:* java.lang.String

---

##### `accessibilityLoginRedirectUrl`<sup>Required</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilityLoginRedirectUrl"></a>

```java
public java.lang.String getAccessibilityLoginRedirectUrl();
```

- *Type:* java.lang.String

---

##### `accessibilitySelfService`<sup>Required</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.accessibilitySelfService"></a>

```java
public java.lang.Object getAccessibilitySelfService();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `adminNote`<sup>Required</sup> <a name="adminNote" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.adminNote"></a>

```java
public java.lang.String getAdminNote();
```

- *Type:* java.lang.String

---

##### `appLinksJson`<sup>Required</sup> <a name="appLinksJson" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.appLinksJson"></a>

```java
public java.lang.String getAppLinksJson();
```

- *Type:* java.lang.String

---

##### `autoSubmitToolbar`<sup>Required</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.autoSubmitToolbar"></a>

```java
public java.lang.Object getAutoSubmitToolbar();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `credentialsScheme`<sup>Required</sup> <a name="credentialsScheme" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.credentialsScheme"></a>

```java
public java.lang.String getCredentialsScheme();
```

- *Type:* java.lang.String

---

##### `enduserNote`<sup>Required</sup> <a name="enduserNote" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.enduserNote"></a>

```java
public java.lang.String getEnduserNote();
```

- *Type:* java.lang.String

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.groups"></a>

```java
public java.util.List<java.lang.String> getGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hideIos`<sup>Required</sup> <a name="hideIos" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideIos"></a>

```java
public java.lang.Object getHideIos();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hideWeb`<sup>Required</sup> <a name="hideWeb" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.hideWeb"></a>

```java
public java.lang.Object getHideWeb();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.logo"></a>

```java
public java.lang.String getLogo();
```

- *Type:* java.lang.String

---

##### `optionalField1`<sup>Required</sup> <a name="optionalField1" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1"></a>

```java
public java.lang.String getOptionalField1();
```

- *Type:* java.lang.String

---

##### `optionalField1Value`<sup>Required</sup> <a name="optionalField1Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField1Value"></a>

```java
public java.lang.String getOptionalField1Value();
```

- *Type:* java.lang.String

---

##### `optionalField2`<sup>Required</sup> <a name="optionalField2" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2"></a>

```java
public java.lang.String getOptionalField2();
```

- *Type:* java.lang.String

---

##### `optionalField2Value`<sup>Required</sup> <a name="optionalField2Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField2Value"></a>

```java
public java.lang.String getOptionalField2Value();
```

- *Type:* java.lang.String

---

##### `optionalField3`<sup>Required</sup> <a name="optionalField3" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3"></a>

```java
public java.lang.String getOptionalField3();
```

- *Type:* java.lang.String

---

##### `optionalField3Value`<sup>Required</sup> <a name="optionalField3Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.optionalField3Value"></a>

```java
public java.lang.String getOptionalField3Value();
```

- *Type:* java.lang.String

---

##### `passwordField`<sup>Required</sup> <a name="passwordField" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.passwordField"></a>

```java
public java.lang.String getPasswordField();
```

- *Type:* java.lang.String

---

##### `revealPassword`<sup>Required</sup> <a name="revealPassword" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.revealPassword"></a>

```java
public java.lang.Object getRevealPassword();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sharedPassword`<sup>Required</sup> <a name="sharedPassword" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedPassword"></a>

```java
public java.lang.String getSharedPassword();
```

- *Type:* java.lang.String

---

##### `sharedUsername`<sup>Required</sup> <a name="sharedUsername" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.sharedUsername"></a>

```java
public java.lang.String getSharedUsername();
```

- *Type:* java.lang.String

---

##### `skipGroups`<sup>Required</sup> <a name="skipGroups" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipGroups"></a>

```java
public java.lang.Object getSkipGroups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipUsers`<sup>Required</sup> <a name="skipUsers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.skipUsers"></a>

```java
public java.lang.Object getSkipUsers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `usernameField`<sup>Required</sup> <a name="usernameField" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.usernameField"></a>

```java
public java.lang.String getUsernameField();
```

- *Type:* java.lang.String

---

##### `userNameTemplate`<sup>Required</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplate"></a>

```java
public java.lang.String getUserNameTemplate();
```

- *Type:* java.lang.String

---

##### `userNameTemplatePushStatus`<sup>Required</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplatePushStatus"></a>

```java
public java.lang.String getUserNameTemplatePushStatus();
```

- *Type:* java.lang.String

---

##### `userNameTemplateSuffix`<sup>Required</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateSuffix"></a>

```java
public java.lang.String getUserNameTemplateSuffix();
```

- *Type:* java.lang.String

---

##### `userNameTemplateType`<sup>Required</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.userNameTemplateType"></a>

```java
public java.lang.String getUserNameTemplateType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreApp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecurePasswordStoreAppConfig <a name="SecurePasswordStoreAppConfig" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.secure_password_store_app.SecurePasswordStoreAppConfig;

SecurePasswordStoreAppConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .label(java.lang.String)
    .passwordField(java.lang.String)
    .url(java.lang.String)
    .usernameField(java.lang.String)
//  .accessibilityErrorRedirectUrl(java.lang.String)
//  .accessibilityLoginRedirectUrl(java.lang.String)
//  .accessibilitySelfService(java.lang.Boolean)
//  .accessibilitySelfService(IResolvable)
//  .adminNote(java.lang.String)
//  .appLinksJson(java.lang.String)
//  .autoSubmitToolbar(java.lang.Boolean)
//  .autoSubmitToolbar(IResolvable)
//  .credentialsScheme(java.lang.String)
//  .enduserNote(java.lang.String)
//  .groups(java.util.List<java.lang.String>)
//  .hideIos(java.lang.Boolean)
//  .hideIos(IResolvable)
//  .hideWeb(java.lang.Boolean)
//  .hideWeb(IResolvable)
//  .id(java.lang.String)
//  .logo(java.lang.String)
//  .optionalField1(java.lang.String)
//  .optionalField1Value(java.lang.String)
//  .optionalField2(java.lang.String)
//  .optionalField2Value(java.lang.String)
//  .optionalField3(java.lang.String)
//  .optionalField3Value(java.lang.String)
//  .revealPassword(java.lang.Boolean)
//  .revealPassword(IResolvable)
//  .sharedPassword(java.lang.String)
//  .sharedUsername(java.lang.String)
//  .skipGroups(java.lang.Boolean)
//  .skipGroups(IResolvable)
//  .skipUsers(java.lang.Boolean)
//  .skipUsers(IResolvable)
//  .status(java.lang.String)
//  .timeouts(SecurePasswordStoreAppTimeouts)
//  .userNameTemplate(java.lang.String)
//  .userNameTemplatePushStatus(java.lang.String)
//  .userNameTemplateSuffix(java.lang.String)
//  .userNameTemplateType(java.lang.String)
//  .users(IResolvable)
//  .users(java.util.List<SecurePasswordStoreAppUsers>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.label">label</a></code> | <code>java.lang.String</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.passwordField">passwordField</a></code> | <code>java.lang.String</code> | Login password field. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.url">url</a></code> | <code>java.lang.String</code> | Login URL. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.usernameField">usernameField</a></code> | <code>java.lang.String</code> | Login username field. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>java.lang.String</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>java.lang.String</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.adminNote">adminNote</a></code> | <code>java.lang.String</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.appLinksJson">appLinksJson</a></code> | <code>java.lang.String</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.credentialsScheme">credentialsScheme</a></code> | <code>java.lang.String</code> | Application credentials scheme. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.enduserNote">enduserNote</a></code> | <code>java.lang.String</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.hideIos">hideIos</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.hideWeb">hideWeb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#id SecurePasswordStoreApp#id}. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.logo">logo</a></code> | <code>java.lang.String</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField1">optionalField1</a></code> | <code>java.lang.String</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField1Value">optionalField1Value</a></code> | <code>java.lang.String</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField2">optionalField2</a></code> | <code>java.lang.String</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField2Value">optionalField2Value</a></code> | <code>java.lang.String</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField3">optionalField3</a></code> | <code>java.lang.String</code> | Name of optional param in the login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField3Value">optionalField3Value</a></code> | <code>java.lang.String</code> | Name of optional value in login form. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.revealPassword">revealPassword</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allow user to reveal password. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.sharedPassword">sharedPassword</a></code> | <code>java.lang.String</code> | Shared password, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.sharedUsername">sharedUsername</a></code> | <code>java.lang.String</code> | Shared username, required for certain schemes. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.skipGroups">skipGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.skipUsers">skipUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.status">status</a></code> | <code>java.lang.String</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts">SecurePasswordStoreAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplate">userNameTemplate</a></code> | <code>java.lang.String</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>java.lang.String</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>java.lang.String</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplateType">userNameTemplateType</a></code> | <code>java.lang.String</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.users">users</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers">SecurePasswordStoreAppUsers</a>></code> | users block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Pretty name of app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#label SecurePasswordStoreApp#label}

---

##### `passwordField`<sup>Required</sup> <a name="passwordField" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.passwordField"></a>

```java
public java.lang.String getPasswordField();
```

- *Type:* java.lang.String

Login password field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#password_field SecurePasswordStoreApp#password_field}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Login URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#url SecurePasswordStoreApp#url}

---

##### `usernameField`<sup>Required</sup> <a name="usernameField" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.usernameField"></a>

```java
public java.lang.String getUsernameField();
```

- *Type:* java.lang.String

Login username field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#username_field SecurePasswordStoreApp#username_field}

---

##### `accessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.accessibilityErrorRedirectUrl"></a>

```java
public java.lang.String getAccessibilityErrorRedirectUrl();
```

- *Type:* java.lang.String

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#accessibility_error_redirect_url SecurePasswordStoreApp#accessibility_error_redirect_url}

---

##### `accessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.accessibilityLoginRedirectUrl"></a>

```java
public java.lang.String getAccessibilityLoginRedirectUrl();
```

- *Type:* java.lang.String

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#accessibility_login_redirect_url SecurePasswordStoreApp#accessibility_login_redirect_url}

---

##### `accessibilitySelfService`<sup>Optional</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.accessibilitySelfService"></a>

```java
public java.lang.Object getAccessibilitySelfService();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable self service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#accessibility_self_service SecurePasswordStoreApp#accessibility_self_service}

---

##### `adminNote`<sup>Optional</sup> <a name="adminNote" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.adminNote"></a>

```java
public java.lang.String getAdminNote();
```

- *Type:* java.lang.String

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#admin_note SecurePasswordStoreApp#admin_note}

---

##### `appLinksJson`<sup>Optional</sup> <a name="appLinksJson" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.appLinksJson"></a>

```java
public java.lang.String getAppLinksJson();
```

- *Type:* java.lang.String

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#app_links_json SecurePasswordStoreApp#app_links_json}

---

##### `autoSubmitToolbar`<sup>Optional</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.autoSubmitToolbar"></a>

```java
public java.lang.Object getAutoSubmitToolbar();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#auto_submit_toolbar SecurePasswordStoreApp#auto_submit_toolbar}

---

##### `credentialsScheme`<sup>Optional</sup> <a name="credentialsScheme" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.credentialsScheme"></a>

```java
public java.lang.String getCredentialsScheme();
```

- *Type:* java.lang.String

Application credentials scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#credentials_scheme SecurePasswordStoreApp#credentials_scheme}

---

##### `enduserNote`<sup>Optional</sup> <a name="enduserNote" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.enduserNote"></a>

```java
public java.lang.String getEnduserNote();
```

- *Type:* java.lang.String

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#enduser_note SecurePasswordStoreApp#enduser_note}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.groups"></a>

```java
public java.util.List<java.lang.String> getGroups();
```

- *Type:* java.util.List<java.lang.String>

Groups associated with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#groups SecurePasswordStoreApp#groups}

---

##### `hideIos`<sup>Optional</sup> <a name="hideIos" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.hideIos"></a>

```java
public java.lang.Object getHideIos();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#hide_ios SecurePasswordStoreApp#hide_ios}

---

##### `hideWeb`<sup>Optional</sup> <a name="hideWeb" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.hideWeb"></a>

```java
public java.lang.Object getHideWeb();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#hide_web SecurePasswordStoreApp#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#id SecurePasswordStoreApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.logo"></a>

```java
public java.lang.String getLogo();
```

- *Type:* java.lang.String

Local path to logo of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#logo SecurePasswordStoreApp#logo}

---

##### `optionalField1`<sup>Optional</sup> <a name="optionalField1" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField1"></a>

```java
public java.lang.String getOptionalField1();
```

- *Type:* java.lang.String

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#optional_field1 SecurePasswordStoreApp#optional_field1}

---

##### `optionalField1Value`<sup>Optional</sup> <a name="optionalField1Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField1Value"></a>

```java
public java.lang.String getOptionalField1Value();
```

- *Type:* java.lang.String

Name of optional value in login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#optional_field1_value SecurePasswordStoreApp#optional_field1_value}

---

##### `optionalField2`<sup>Optional</sup> <a name="optionalField2" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField2"></a>

```java
public java.lang.String getOptionalField2();
```

- *Type:* java.lang.String

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#optional_field2 SecurePasswordStoreApp#optional_field2}

---

##### `optionalField2Value`<sup>Optional</sup> <a name="optionalField2Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField2Value"></a>

```java
public java.lang.String getOptionalField2Value();
```

- *Type:* java.lang.String

Name of optional value in login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#optional_field2_value SecurePasswordStoreApp#optional_field2_value}

---

##### `optionalField3`<sup>Optional</sup> <a name="optionalField3" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField3"></a>

```java
public java.lang.String getOptionalField3();
```

- *Type:* java.lang.String

Name of optional param in the login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#optional_field3 SecurePasswordStoreApp#optional_field3}

---

##### `optionalField3Value`<sup>Optional</sup> <a name="optionalField3Value" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.optionalField3Value"></a>

```java
public java.lang.String getOptionalField3Value();
```

- *Type:* java.lang.String

Name of optional value in login form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#optional_field3_value SecurePasswordStoreApp#optional_field3_value}

---

##### `revealPassword`<sup>Optional</sup> <a name="revealPassword" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.revealPassword"></a>

```java
public java.lang.Object getRevealPassword();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allow user to reveal password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#reveal_password SecurePasswordStoreApp#reveal_password}

---

##### `sharedPassword`<sup>Optional</sup> <a name="sharedPassword" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.sharedPassword"></a>

```java
public java.lang.String getSharedPassword();
```

- *Type:* java.lang.String

Shared password, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#shared_password SecurePasswordStoreApp#shared_password}

---

##### `sharedUsername`<sup>Optional</sup> <a name="sharedUsername" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.sharedUsername"></a>

```java
public java.lang.String getSharedUsername();
```

- *Type:* java.lang.String

Shared username, required for certain schemes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#shared_username SecurePasswordStoreApp#shared_username}

---

##### `skipGroups`<sup>Optional</sup> <a name="skipGroups" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.skipGroups"></a>

```java
public java.lang.Object getSkipGroups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#skip_groups SecurePasswordStoreApp#skip_groups}

---

##### `skipUsers`<sup>Optional</sup> <a name="skipUsers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.skipUsers"></a>

```java
public java.lang.Object getSkipUsers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#skip_users SecurePasswordStoreApp#skip_users}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Status of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#status SecurePasswordStoreApp#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.timeouts"></a>

```java
public SecurePasswordStoreAppTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts">SecurePasswordStoreAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#timeouts SecurePasswordStoreApp#timeouts}

---

##### `userNameTemplate`<sup>Optional</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplate"></a>

```java
public java.lang.String getUserNameTemplate();
```

- *Type:* java.lang.String

Username template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#user_name_template SecurePasswordStoreApp#user_name_template}

---

##### `userNameTemplatePushStatus`<sup>Optional</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplatePushStatus"></a>

```java
public java.lang.String getUserNameTemplatePushStatus();
```

- *Type:* java.lang.String

Push username on update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#user_name_template_push_status SecurePasswordStoreApp#user_name_template_push_status}

---

##### `userNameTemplateSuffix`<sup>Optional</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplateSuffix"></a>

```java
public java.lang.String getUserNameTemplateSuffix();
```

- *Type:* java.lang.String

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#user_name_template_suffix SecurePasswordStoreApp#user_name_template_suffix}

---

##### `userNameTemplateType`<sup>Optional</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.userNameTemplateType"></a>

```java
public java.lang.String getUserNameTemplateType();
```

- *Type:* java.lang.String

Username template type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#user_name_template_type SecurePasswordStoreApp#user_name_template_type}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppConfig.property.users"></a>

```java
public java.lang.Object getUsers();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers">SecurePasswordStoreAppUsers</a>>

users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#users SecurePasswordStoreApp#users}

---

### SecurePasswordStoreAppTimeouts <a name="SecurePasswordStoreAppTimeouts" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.secure_password_store_app.SecurePasswordStoreAppTimeouts;

SecurePasswordStoreAppTimeouts.builder()
//  .create(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#create SecurePasswordStoreApp#create}. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#read SecurePasswordStoreApp#read}. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#update SecurePasswordStoreApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#create SecurePasswordStoreApp#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#read SecurePasswordStoreApp#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#update SecurePasswordStoreApp#update}.

---

### SecurePasswordStoreAppUsers <a name="SecurePasswordStoreAppUsers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.secure_password_store_app.SecurePasswordStoreAppUsers;

SecurePasswordStoreAppUsers.builder()
//  .id(java.lang.String)
//  .password(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.property.id">id</a></code> | <code>java.lang.String</code> | User ID. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.property.password">password</a></code> | <code>java.lang.String</code> | Password for user application. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.property.username">username</a></code> | <code>java.lang.String</code> | Username for user. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

User ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#id SecurePasswordStoreApp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Password for user application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#password SecurePasswordStoreApp#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Username for user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/secure_password_store_app#username SecurePasswordStoreApp#username}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurePasswordStoreAppTimeoutsOutputReference <a name="SecurePasswordStoreAppTimeoutsOutputReference" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.secure_password_store_app.SecurePasswordStoreAppTimeoutsOutputReference;

new SecurePasswordStoreAppTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts">SecurePasswordStoreAppTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppTimeouts">SecurePasswordStoreAppTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---


### SecurePasswordStoreAppUsersList <a name="SecurePasswordStoreAppUsersList" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.secure_password_store_app.SecurePasswordStoreAppUsersList;

new SecurePasswordStoreAppUsersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.get"></a>

```java
public SecurePasswordStoreAppUsersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers">SecurePasswordStoreAppUsers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers">SecurePasswordStoreAppUsers</a>>

---


### SecurePasswordStoreAppUsersOutputReference <a name="SecurePasswordStoreAppUsersOutputReference" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.secure_password_store_app.SecurePasswordStoreAppUsersOutputReference;

new SecurePasswordStoreAppUsersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers">SecurePasswordStoreAppUsers</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-okta.securePasswordStoreApp.SecurePasswordStoreAppUsers">SecurePasswordStoreAppUsers</a> OR com.hashicorp.cdktf.IResolvable

---



