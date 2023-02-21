# `oauthApp` Submodule <a name="`oauthApp` Submodule" id="@cdktf/provider-okta.oauthApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OauthApp <a name="OauthApp" id="@cdktf/provider-okta.oauthApp.OauthApp"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/oauth_app okta_oauth_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.oauth_app.OauthApp;

OauthApp.Builder.create(Construct scope, java.lang.String id)
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
    .type(java.lang.String)
//  .accessibilityErrorRedirectUrl(java.lang.String)
//  .accessibilityLoginRedirectUrl(java.lang.String)
//  .accessibilitySelfService(java.lang.Boolean)
//  .accessibilitySelfService(IResolvable)
//  .adminNote(java.lang.String)
//  .appLinksJson(java.lang.String)
//  .appSettingsJson(java.lang.String)
//  .authenticationPolicy(java.lang.String)
//  .autoKeyRotation(java.lang.Boolean)
//  .autoKeyRotation(IResolvable)
//  .autoSubmitToolbar(java.lang.Boolean)
//  .autoSubmitToolbar(IResolvable)
//  .clientBasicSecret(java.lang.String)
//  .clientId(java.lang.String)
//  .clientUri(java.lang.String)
//  .consentMethod(java.lang.String)
//  .customClientId(java.lang.String)
//  .enduserNote(java.lang.String)
//  .grantTypes(java.util.List<java.lang.String>)
//  .groups(java.util.List<java.lang.String>)
//  .groupsClaim(OauthAppGroupsClaim)
//  .hideIos(java.lang.Boolean)
//  .hideIos(IResolvable)
//  .hideWeb(java.lang.Boolean)
//  .hideWeb(IResolvable)
//  .id(java.lang.String)
//  .implicitAssignment(java.lang.Boolean)
//  .implicitAssignment(IResolvable)
//  .issuerMode(java.lang.String)
//  .jwks(IResolvable)
//  .jwks(java.util.List<OauthAppJwks>)
//  .loginMode(java.lang.String)
//  .loginScopes(java.util.List<java.lang.String>)
//  .loginUri(java.lang.String)
//  .logo(java.lang.String)
//  .logoUri(java.lang.String)
//  .omitSecret(java.lang.Boolean)
//  .omitSecret(IResolvable)
//  .pkceRequired(java.lang.Boolean)
//  .pkceRequired(IResolvable)
//  .policyUri(java.lang.String)
//  .postLogoutRedirectUris(java.util.List<java.lang.String>)
//  .profile(java.lang.String)
//  .redirectUris(java.util.List<java.lang.String>)
//  .refreshTokenLeeway(java.lang.Number)
//  .refreshTokenRotation(java.lang.String)
//  .responseTypes(java.util.List<java.lang.String>)
//  .skipGroups(java.lang.Boolean)
//  .skipGroups(IResolvable)
//  .skipUsers(java.lang.Boolean)
//  .skipUsers(IResolvable)
//  .status(java.lang.String)
//  .timeouts(OauthAppTimeouts)
//  .tokenEndpointAuthMethod(java.lang.String)
//  .tosUri(java.lang.String)
//  .userNameTemplate(java.lang.String)
//  .userNameTemplatePushStatus(java.lang.String)
//  .userNameTemplateSuffix(java.lang.String)
//  .userNameTemplateType(java.lang.String)
//  .users(IResolvable)
//  .users(java.util.List<OauthAppUsers>)
//  .wildcardRedirect(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.label">label</a></code> | <code>java.lang.String</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of client application. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>java.lang.String</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>java.lang.String</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.accessibilitySelfService">accessibilitySelfService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.adminNote">adminNote</a></code> | <code>java.lang.String</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.appLinksJson">appLinksJson</a></code> | <code>java.lang.String</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.appSettingsJson">appSettingsJson</a></code> | <code>java.lang.String</code> | Application settings in JSON format. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.authenticationPolicy">authenticationPolicy</a></code> | <code>java.lang.String</code> | Id of this apps authentication policy. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.autoKeyRotation">autoKeyRotation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Requested key rotation mode. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.clientBasicSecret">clientBasicSecret</a></code> | <code>java.lang.String</code> | OAuth client secret key, this can be set when token_endpoint_auth_method is client_secret_basic. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | OAuth client ID. If set during creation, app is created with this id. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.clientUri">clientUri</a></code> | <code>java.lang.String</code> | URI to a web page providing information about the client. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.consentMethod">consentMethod</a></code> | <code>java.lang.String</code> | *Early Access Property*. Indicates whether user consent is required or implicit. Valid values: REQUIRED, TRUSTED. Default value is TRUSTED. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.customClientId">customClientId</a></code> | <code>java.lang.String</code> | **Deprecated** This property allows you to set your client_id during creation. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.enduserNote">enduserNote</a></code> | <code>java.lang.String</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.grantTypes">grantTypes</a></code> | <code>java.util.List<java.lang.String></code> | List of OAuth 2.0 grant types. Conditional validation params found here https://developer.okta.com/docs/api/resources/apps#credentials-settings-details. Defaults to minimum requirements per app type. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.groupsClaim">groupsClaim</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a></code> | groups_claim block. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.hideIos">hideIos</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.hideWeb">hideWeb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#id OauthApp#id}. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.implicitAssignment">implicitAssignment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *Early Access Property*. Enable Federation Broker Mode. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.issuerMode">issuerMode</a></code> | <code>java.lang.String</code> | *Early Access Property*. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.jwks">jwks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks">OauthAppJwks</a>></code> | jwks block. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.loginMode">loginMode</a></code> | <code>java.lang.String</code> | The type of Idp-Initiated login that the client supports, if any. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.loginScopes">loginScopes</a></code> | <code>java.util.List<java.lang.String></code> | List of scopes to use for the request. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.loginUri">loginUri</a></code> | <code>java.lang.String</code> | URI that initiates login. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.logo">logo</a></code> | <code>java.lang.String</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.logoUri">logoUri</a></code> | <code>java.lang.String</code> | URI that references a logo for the client. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.omitSecret">omitSecret</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This tells the provider not to persist the application's secret to state. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.pkceRequired">pkceRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Require Proof Key for Code Exchange (PKCE) for additional verification key rotation mode. See: https://developer.okta.com/docs/reference/api/apps/#oauth-credential-object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.policyUri">policyUri</a></code> | <code>java.lang.String</code> | URI to web page providing client policy document. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.postLogoutRedirectUris">postLogoutRedirectUris</a></code> | <code>java.util.List<java.lang.String></code> | List of URIs for redirection after logout. Note: see okta_app_oauth_post_logout_redirect_uri for appending to this list in a decentralized way. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.profile">profile</a></code> | <code>java.lang.String</code> | Custom JSON that represents an OAuth application's profile. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.redirectUris">redirectUris</a></code> | <code>java.util.List<java.lang.String></code> | List of URIs for use in the redirect-based flow. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.refreshTokenLeeway">refreshTokenLeeway</a></code> | <code>java.lang.Number</code> | *Early Access Property* Grace period for token rotation. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.refreshTokenRotation">refreshTokenRotation</a></code> | <code>java.lang.String</code> | *Early Access Property* Refresh token rotation behavior. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.responseTypes">responseTypes</a></code> | <code>java.util.List<java.lang.String></code> | List of OAuth 2.0 response type strings. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.skipGroups">skipGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.skipUsers">skipUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts">OauthAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.tokenEndpointAuthMethod">tokenEndpointAuthMethod</a></code> | <code>java.lang.String</code> | Requested authentication method for the token endpoint. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.tosUri">tosUri</a></code> | <code>java.lang.String</code> | URI to web page providing client tos (terms of service). |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.userNameTemplate">userNameTemplate</a></code> | <code>java.lang.String</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>java.lang.String</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>java.lang.String</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.userNameTemplateType">userNameTemplateType</a></code> | <code>java.lang.String</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.users">users</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers">OauthAppUsers</a>></code> | users block. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.wildcardRedirect">wildcardRedirect</a></code> | <code>java.lang.String</code> | *Early Access Property*. Indicates if the client is allowed to use wildcard matching of redirect_uris. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.label"></a>

- *Type:* java.lang.String

Pretty name of app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#label OauthApp#label}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of client application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#type OauthApp#type}

---

##### `accessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.accessibilityErrorRedirectUrl"></a>

- *Type:* java.lang.String

Custom error page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#accessibility_error_redirect_url OauthApp#accessibility_error_redirect_url}

---

##### `accessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.accessibilityLoginRedirectUrl"></a>

- *Type:* java.lang.String

Custom login page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#accessibility_login_redirect_url OauthApp#accessibility_login_redirect_url}

---

##### `accessibilitySelfService`<sup>Optional</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.accessibilitySelfService"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable self service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#accessibility_self_service OauthApp#accessibility_self_service}

---

##### `adminNote`<sup>Optional</sup> <a name="adminNote" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.adminNote"></a>

- *Type:* java.lang.String

Application notes for admins.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#admin_note OauthApp#admin_note}

---

##### `appLinksJson`<sup>Optional</sup> <a name="appLinksJson" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.appLinksJson"></a>

- *Type:* java.lang.String

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#app_links_json OauthApp#app_links_json}

---

##### `appSettingsJson`<sup>Optional</sup> <a name="appSettingsJson" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.appSettingsJson"></a>

- *Type:* java.lang.String

Application settings in JSON format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#app_settings_json OauthApp#app_settings_json}

---

##### `authenticationPolicy`<sup>Optional</sup> <a name="authenticationPolicy" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.authenticationPolicy"></a>

- *Type:* java.lang.String

Id of this apps authentication policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#authentication_policy OauthApp#authentication_policy}

---

##### `autoKeyRotation`<sup>Optional</sup> <a name="autoKeyRotation" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.autoKeyRotation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Requested key rotation mode.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#auto_key_rotation OauthApp#auto_key_rotation}

---

##### `autoSubmitToolbar`<sup>Optional</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.autoSubmitToolbar"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#auto_submit_toolbar OauthApp#auto_submit_toolbar}

---

##### `clientBasicSecret`<sup>Optional</sup> <a name="clientBasicSecret" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.clientBasicSecret"></a>

- *Type:* java.lang.String

OAuth client secret key, this can be set when token_endpoint_auth_method is client_secret_basic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#client_basic_secret OauthApp#client_basic_secret}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

OAuth client ID. If set during creation, app is created with this id.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#client_id OauthApp#client_id}

---

##### `clientUri`<sup>Optional</sup> <a name="clientUri" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.clientUri"></a>

- *Type:* java.lang.String

URI to a web page providing information about the client.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#client_uri OauthApp#client_uri}

---

##### `consentMethod`<sup>Optional</sup> <a name="consentMethod" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.consentMethod"></a>

- *Type:* java.lang.String

*Early Access Property*. Indicates whether user consent is required or implicit. Valid values: REQUIRED, TRUSTED. Default value is TRUSTED.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#consent_method OauthApp#consent_method}

---

##### `customClientId`<sup>Optional</sup> <a name="customClientId" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.customClientId"></a>

- *Type:* java.lang.String

**Deprecated** This property allows you to set your client_id during creation.

NOTE: updating after creation will be a no-op, use client_id for that behavior instead.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#custom_client_id OauthApp#custom_client_id}

---

##### `enduserNote`<sup>Optional</sup> <a name="enduserNote" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.enduserNote"></a>

- *Type:* java.lang.String

Application notes for end users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#enduser_note OauthApp#enduser_note}

---

##### `grantTypes`<sup>Optional</sup> <a name="grantTypes" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.grantTypes"></a>

- *Type:* java.util.List<java.lang.String>

List of OAuth 2.0 grant types. Conditional validation params found here https://developer.okta.com/docs/api/resources/apps#credentials-settings-details. Defaults to minimum requirements per app type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#grant_types OauthApp#grant_types}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.groups"></a>

- *Type:* java.util.List<java.lang.String>

Groups associated with the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#groups OauthApp#groups}

---

##### `groupsClaim`<sup>Optional</sup> <a name="groupsClaim" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.groupsClaim"></a>

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a>

groups_claim block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#groups_claim OauthApp#groups_claim}

---

##### `hideIos`<sup>Optional</sup> <a name="hideIos" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.hideIos"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#hide_ios OauthApp#hide_ios}

---

##### `hideWeb`<sup>Optional</sup> <a name="hideWeb" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.hideWeb"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon to users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#hide_web OauthApp#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#id OauthApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `implicitAssignment`<sup>Optional</sup> <a name="implicitAssignment" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.implicitAssignment"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

*Early Access Property*. Enable Federation Broker Mode.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#implicit_assignment OauthApp#implicit_assignment}

---

##### `issuerMode`<sup>Optional</sup> <a name="issuerMode" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.issuerMode"></a>

- *Type:* java.lang.String

*Early Access Property*.

Indicates whether the Okta Authorization Server uses the original Okta org domain URL or a custom domain URL as the issuer of ID token for this client.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#issuer_mode OauthApp#issuer_mode}

---

##### `jwks`<sup>Optional</sup> <a name="jwks" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.jwks"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks">OauthAppJwks</a>>

jwks block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#jwks OauthApp#jwks}

---

##### `loginMode`<sup>Optional</sup> <a name="loginMode" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.loginMode"></a>

- *Type:* java.lang.String

The type of Idp-Initiated login that the client supports, if any.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#login_mode OauthApp#login_mode}

---

##### `loginScopes`<sup>Optional</sup> <a name="loginScopes" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.loginScopes"></a>

- *Type:* java.util.List<java.lang.String>

List of scopes to use for the request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#login_scopes OauthApp#login_scopes}

---

##### `loginUri`<sup>Optional</sup> <a name="loginUri" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.loginUri"></a>

- *Type:* java.lang.String

URI that initiates login.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#login_uri OauthApp#login_uri}

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.logo"></a>

- *Type:* java.lang.String

Local path to logo of the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#logo OauthApp#logo}

---

##### `logoUri`<sup>Optional</sup> <a name="logoUri" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.logoUri"></a>

- *Type:* java.lang.String

URI that references a logo for the client.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#logo_uri OauthApp#logo_uri}

---

##### `omitSecret`<sup>Optional</sup> <a name="omitSecret" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.omitSecret"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This tells the provider not to persist the application's secret to state.

If this is ever changes from true => false your app will be recreated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#omit_secret OauthApp#omit_secret}

---

##### `pkceRequired`<sup>Optional</sup> <a name="pkceRequired" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.pkceRequired"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Require Proof Key for Code Exchange (PKCE) for additional verification key rotation mode. See: https://developer.okta.com/docs/reference/api/apps/#oauth-credential-object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#pkce_required OauthApp#pkce_required}

---

##### `policyUri`<sup>Optional</sup> <a name="policyUri" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.policyUri"></a>

- *Type:* java.lang.String

URI to web page providing client policy document.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#policy_uri OauthApp#policy_uri}

---

##### `postLogoutRedirectUris`<sup>Optional</sup> <a name="postLogoutRedirectUris" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.postLogoutRedirectUris"></a>

- *Type:* java.util.List<java.lang.String>

List of URIs for redirection after logout. Note: see okta_app_oauth_post_logout_redirect_uri for appending to this list in a decentralized way.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#post_logout_redirect_uris OauthApp#post_logout_redirect_uris}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.profile"></a>

- *Type:* java.lang.String

Custom JSON that represents an OAuth application's profile.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#profile OauthApp#profile}

---

##### `redirectUris`<sup>Optional</sup> <a name="redirectUris" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.redirectUris"></a>

- *Type:* java.util.List<java.lang.String>

List of URIs for use in the redirect-based flow.

This is required for all application types except service. Note: see okta_app_oauth_redirect_uri for appending to this list in a decentralized way.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#redirect_uris OauthApp#redirect_uris}

---

##### `refreshTokenLeeway`<sup>Optional</sup> <a name="refreshTokenLeeway" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.refreshTokenLeeway"></a>

- *Type:* java.lang.Number

*Early Access Property* Grace period for token rotation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#refresh_token_leeway OauthApp#refresh_token_leeway}

---

##### `refreshTokenRotation`<sup>Optional</sup> <a name="refreshTokenRotation" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.refreshTokenRotation"></a>

- *Type:* java.lang.String

*Early Access Property* Refresh token rotation behavior.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#refresh_token_rotation OauthApp#refresh_token_rotation}

---

##### `responseTypes`<sup>Optional</sup> <a name="responseTypes" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.responseTypes"></a>

- *Type:* java.util.List<java.lang.String>

List of OAuth 2.0 response type strings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#response_types OauthApp#response_types}

---

##### `skipGroups`<sup>Optional</sup> <a name="skipGroups" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.skipGroups"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#skip_groups OauthApp#skip_groups}

---

##### `skipUsers`<sup>Optional</sup> <a name="skipUsers" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.skipUsers"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#skip_users OauthApp#skip_users}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Status of application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#status OauthApp#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts">OauthAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#timeouts OauthApp#timeouts}

---

##### `tokenEndpointAuthMethod`<sup>Optional</sup> <a name="tokenEndpointAuthMethod" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.tokenEndpointAuthMethod"></a>

- *Type:* java.lang.String

Requested authentication method for the token endpoint.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#token_endpoint_auth_method OauthApp#token_endpoint_auth_method}

---

##### `tosUri`<sup>Optional</sup> <a name="tosUri" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.tosUri"></a>

- *Type:* java.lang.String

URI to web page providing client tos (terms of service).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#tos_uri OauthApp#tos_uri}

---

##### `userNameTemplate`<sup>Optional</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.userNameTemplate"></a>

- *Type:* java.lang.String

Username template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#user_name_template OauthApp#user_name_template}

---

##### `userNameTemplatePushStatus`<sup>Optional</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.userNameTemplatePushStatus"></a>

- *Type:* java.lang.String

Push username on update.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#user_name_template_push_status OauthApp#user_name_template_push_status}

---

##### `userNameTemplateSuffix`<sup>Optional</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.userNameTemplateSuffix"></a>

- *Type:* java.lang.String

Username template suffix.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#user_name_template_suffix OauthApp#user_name_template_suffix}

---

##### `userNameTemplateType`<sup>Optional</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.userNameTemplateType"></a>

- *Type:* java.lang.String

Username template type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#user_name_template_type OauthApp#user_name_template_type}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.users"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers">OauthAppUsers</a>>

users block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#users OauthApp#users}

---

##### `wildcardRedirect`<sup>Optional</sup> <a name="wildcardRedirect" id="@cdktf/provider-okta.oauthApp.OauthApp.Initializer.parameter.wildcardRedirect"></a>

- *Type:* java.lang.String

*Early Access Property*. Indicates if the client is allowed to use wildcard matching of redirect_uris.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#wildcard_redirect OauthApp#wildcard_redirect}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.putGroupsClaim">putGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.putJwks">putJwks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.putUsers">putUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAccessibilityErrorRedirectUrl">resetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAccessibilityLoginRedirectUrl">resetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAccessibilitySelfService">resetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAdminNote">resetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAppLinksJson">resetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAppSettingsJson">resetAppSettingsJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAuthenticationPolicy">resetAuthenticationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAutoKeyRotation">resetAutoKeyRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetAutoSubmitToolbar">resetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetClientBasicSecret">resetClientBasicSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetClientUri">resetClientUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetConsentMethod">resetConsentMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetCustomClientId">resetCustomClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetEnduserNote">resetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetGrantTypes">resetGrantTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetGroupsClaim">resetGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetHideIos">resetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetHideWeb">resetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetImplicitAssignment">resetImplicitAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetIssuerMode">resetIssuerMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetJwks">resetJwks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetLoginMode">resetLoginMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetLoginScopes">resetLoginScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetLoginUri">resetLoginUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetLogo">resetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetLogoUri">resetLogoUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetOmitSecret">resetOmitSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetPkceRequired">resetPkceRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetPolicyUri">resetPolicyUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetPostLogoutRedirectUris">resetPostLogoutRedirectUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetProfile">resetProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetRedirectUris">resetRedirectUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetRefreshTokenLeeway">resetRefreshTokenLeeway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetRefreshTokenRotation">resetRefreshTokenRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetResponseTypes">resetResponseTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetSkipGroups">resetSkipGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetSkipUsers">resetSkipUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetTokenEndpointAuthMethod">resetTokenEndpointAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetTosUri">resetTosUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplate">resetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplatePushStatus">resetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplateSuffix">resetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplateType">resetUserNameTemplateType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetUsers">resetUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.resetWildcardRedirect">resetWildcardRedirect</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.oauthApp.OauthApp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.oauthApp.OauthApp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.oauthApp.OauthApp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.oauthApp.OauthApp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.oauthApp.OauthApp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.oauthApp.OauthApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.oauthApp.OauthApp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.oauthApp.OauthApp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.oauthApp.OauthApp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putGroupsClaim` <a name="putGroupsClaim" id="@cdktf/provider-okta.oauthApp.OauthApp.putGroupsClaim"></a>

```java
public void putGroupsClaim(OauthAppGroupsClaim value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.oauthApp.OauthApp.putGroupsClaim.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a>

---

##### `putJwks` <a name="putJwks" id="@cdktf/provider-okta.oauthApp.OauthApp.putJwks"></a>

```java
public void putJwks(IResolvable OR java.util.List<OauthAppJwks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.oauthApp.OauthApp.putJwks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks">OauthAppJwks</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-okta.oauthApp.OauthApp.putTimeouts"></a>

```java
public void putTimeouts(OauthAppTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.oauthApp.OauthApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts">OauthAppTimeouts</a>

---

##### `putUsers` <a name="putUsers" id="@cdktf/provider-okta.oauthApp.OauthApp.putUsers"></a>

```java
public void putUsers(IResolvable OR java.util.List<OauthAppUsers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.oauthApp.OauthApp.putUsers.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers">OauthAppUsers</a>>

---

##### `resetAccessibilityErrorRedirectUrl` <a name="resetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAccessibilityErrorRedirectUrl"></a>

```java
public void resetAccessibilityErrorRedirectUrl()
```

##### `resetAccessibilityLoginRedirectUrl` <a name="resetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAccessibilityLoginRedirectUrl"></a>

```java
public void resetAccessibilityLoginRedirectUrl()
```

##### `resetAccessibilitySelfService` <a name="resetAccessibilitySelfService" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAccessibilitySelfService"></a>

```java
public void resetAccessibilitySelfService()
```

##### `resetAdminNote` <a name="resetAdminNote" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAdminNote"></a>

```java
public void resetAdminNote()
```

##### `resetAppLinksJson` <a name="resetAppLinksJson" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAppLinksJson"></a>

```java
public void resetAppLinksJson()
```

##### `resetAppSettingsJson` <a name="resetAppSettingsJson" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAppSettingsJson"></a>

```java
public void resetAppSettingsJson()
```

##### `resetAuthenticationPolicy` <a name="resetAuthenticationPolicy" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAuthenticationPolicy"></a>

```java
public void resetAuthenticationPolicy()
```

##### `resetAutoKeyRotation` <a name="resetAutoKeyRotation" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAutoKeyRotation"></a>

```java
public void resetAutoKeyRotation()
```

##### `resetAutoSubmitToolbar` <a name="resetAutoSubmitToolbar" id="@cdktf/provider-okta.oauthApp.OauthApp.resetAutoSubmitToolbar"></a>

```java
public void resetAutoSubmitToolbar()
```

##### `resetClientBasicSecret` <a name="resetClientBasicSecret" id="@cdktf/provider-okta.oauthApp.OauthApp.resetClientBasicSecret"></a>

```java
public void resetClientBasicSecret()
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-okta.oauthApp.OauthApp.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientUri` <a name="resetClientUri" id="@cdktf/provider-okta.oauthApp.OauthApp.resetClientUri"></a>

```java
public void resetClientUri()
```

##### `resetConsentMethod` <a name="resetConsentMethod" id="@cdktf/provider-okta.oauthApp.OauthApp.resetConsentMethod"></a>

```java
public void resetConsentMethod()
```

##### `resetCustomClientId` <a name="resetCustomClientId" id="@cdktf/provider-okta.oauthApp.OauthApp.resetCustomClientId"></a>

```java
public void resetCustomClientId()
```

##### `resetEnduserNote` <a name="resetEnduserNote" id="@cdktf/provider-okta.oauthApp.OauthApp.resetEnduserNote"></a>

```java
public void resetEnduserNote()
```

##### `resetGrantTypes` <a name="resetGrantTypes" id="@cdktf/provider-okta.oauthApp.OauthApp.resetGrantTypes"></a>

```java
public void resetGrantTypes()
```

##### `resetGroups` <a name="resetGroups" id="@cdktf/provider-okta.oauthApp.OauthApp.resetGroups"></a>

```java
public void resetGroups()
```

##### `resetGroupsClaim` <a name="resetGroupsClaim" id="@cdktf/provider-okta.oauthApp.OauthApp.resetGroupsClaim"></a>

```java
public void resetGroupsClaim()
```

##### `resetHideIos` <a name="resetHideIos" id="@cdktf/provider-okta.oauthApp.OauthApp.resetHideIos"></a>

```java
public void resetHideIos()
```

##### `resetHideWeb` <a name="resetHideWeb" id="@cdktf/provider-okta.oauthApp.OauthApp.resetHideWeb"></a>

```java
public void resetHideWeb()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.oauthApp.OauthApp.resetId"></a>

```java
public void resetId()
```

##### `resetImplicitAssignment` <a name="resetImplicitAssignment" id="@cdktf/provider-okta.oauthApp.OauthApp.resetImplicitAssignment"></a>

```java
public void resetImplicitAssignment()
```

##### `resetIssuerMode` <a name="resetIssuerMode" id="@cdktf/provider-okta.oauthApp.OauthApp.resetIssuerMode"></a>

```java
public void resetIssuerMode()
```

##### `resetJwks` <a name="resetJwks" id="@cdktf/provider-okta.oauthApp.OauthApp.resetJwks"></a>

```java
public void resetJwks()
```

##### `resetLoginMode` <a name="resetLoginMode" id="@cdktf/provider-okta.oauthApp.OauthApp.resetLoginMode"></a>

```java
public void resetLoginMode()
```

##### `resetLoginScopes` <a name="resetLoginScopes" id="@cdktf/provider-okta.oauthApp.OauthApp.resetLoginScopes"></a>

```java
public void resetLoginScopes()
```

##### `resetLoginUri` <a name="resetLoginUri" id="@cdktf/provider-okta.oauthApp.OauthApp.resetLoginUri"></a>

```java
public void resetLoginUri()
```

##### `resetLogo` <a name="resetLogo" id="@cdktf/provider-okta.oauthApp.OauthApp.resetLogo"></a>

```java
public void resetLogo()
```

##### `resetLogoUri` <a name="resetLogoUri" id="@cdktf/provider-okta.oauthApp.OauthApp.resetLogoUri"></a>

```java
public void resetLogoUri()
```

##### `resetOmitSecret` <a name="resetOmitSecret" id="@cdktf/provider-okta.oauthApp.OauthApp.resetOmitSecret"></a>

```java
public void resetOmitSecret()
```

##### `resetPkceRequired` <a name="resetPkceRequired" id="@cdktf/provider-okta.oauthApp.OauthApp.resetPkceRequired"></a>

```java
public void resetPkceRequired()
```

##### `resetPolicyUri` <a name="resetPolicyUri" id="@cdktf/provider-okta.oauthApp.OauthApp.resetPolicyUri"></a>

```java
public void resetPolicyUri()
```

##### `resetPostLogoutRedirectUris` <a name="resetPostLogoutRedirectUris" id="@cdktf/provider-okta.oauthApp.OauthApp.resetPostLogoutRedirectUris"></a>

```java
public void resetPostLogoutRedirectUris()
```

##### `resetProfile` <a name="resetProfile" id="@cdktf/provider-okta.oauthApp.OauthApp.resetProfile"></a>

```java
public void resetProfile()
```

##### `resetRedirectUris` <a name="resetRedirectUris" id="@cdktf/provider-okta.oauthApp.OauthApp.resetRedirectUris"></a>

```java
public void resetRedirectUris()
```

##### `resetRefreshTokenLeeway` <a name="resetRefreshTokenLeeway" id="@cdktf/provider-okta.oauthApp.OauthApp.resetRefreshTokenLeeway"></a>

```java
public void resetRefreshTokenLeeway()
```

##### `resetRefreshTokenRotation` <a name="resetRefreshTokenRotation" id="@cdktf/provider-okta.oauthApp.OauthApp.resetRefreshTokenRotation"></a>

```java
public void resetRefreshTokenRotation()
```

##### `resetResponseTypes` <a name="resetResponseTypes" id="@cdktf/provider-okta.oauthApp.OauthApp.resetResponseTypes"></a>

```java
public void resetResponseTypes()
```

##### `resetSkipGroups` <a name="resetSkipGroups" id="@cdktf/provider-okta.oauthApp.OauthApp.resetSkipGroups"></a>

```java
public void resetSkipGroups()
```

##### `resetSkipUsers` <a name="resetSkipUsers" id="@cdktf/provider-okta.oauthApp.OauthApp.resetSkipUsers"></a>

```java
public void resetSkipUsers()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.oauthApp.OauthApp.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-okta.oauthApp.OauthApp.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTokenEndpointAuthMethod` <a name="resetTokenEndpointAuthMethod" id="@cdktf/provider-okta.oauthApp.OauthApp.resetTokenEndpointAuthMethod"></a>

```java
public void resetTokenEndpointAuthMethod()
```

##### `resetTosUri` <a name="resetTosUri" id="@cdktf/provider-okta.oauthApp.OauthApp.resetTosUri"></a>

```java
public void resetTosUri()
```

##### `resetUserNameTemplate` <a name="resetUserNameTemplate" id="@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplate"></a>

```java
public void resetUserNameTemplate()
```

##### `resetUserNameTemplatePushStatus` <a name="resetUserNameTemplatePushStatus" id="@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplatePushStatus"></a>

```java
public void resetUserNameTemplatePushStatus()
```

##### `resetUserNameTemplateSuffix` <a name="resetUserNameTemplateSuffix" id="@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplateSuffix"></a>

```java
public void resetUserNameTemplateSuffix()
```

##### `resetUserNameTemplateType` <a name="resetUserNameTemplateType" id="@cdktf/provider-okta.oauthApp.OauthApp.resetUserNameTemplateType"></a>

```java
public void resetUserNameTemplateType()
```

##### `resetUsers` <a name="resetUsers" id="@cdktf/provider-okta.oauthApp.OauthApp.resetUsers"></a>

```java
public void resetUsers()
```

##### `resetWildcardRedirect` <a name="resetWildcardRedirect" id="@cdktf/provider-okta.oauthApp.OauthApp.resetWildcardRedirect"></a>

```java
public void resetWildcardRedirect()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.oauthApp.OauthApp.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.oauth_app.OauthApp;

OauthApp.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.oauthApp.OauthApp.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.oauthApp.OauthApp.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.oauth_app.OauthApp;

OauthApp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.oauthApp.OauthApp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.oauthApp.OauthApp.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.oauth_app.OauthApp;

OauthApp.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.oauthApp.OauthApp.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.groupsClaim">groupsClaim</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference">OauthAppGroupsClaimOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.jwks">jwks</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList">OauthAppJwksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.logoUrl">logoUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.signOnMode">signOnMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference">OauthAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.users">users</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList">OauthAppUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityErrorRedirectUrlInput">accessibilityErrorRedirectUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityLoginRedirectUrlInput">accessibilityLoginRedirectUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilitySelfServiceInput">accessibilitySelfServiceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.adminNoteInput">adminNoteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.appLinksJsonInput">appLinksJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.appSettingsJsonInput">appSettingsJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.authenticationPolicyInput">authenticationPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.autoKeyRotationInput">autoKeyRotationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.autoSubmitToolbarInput">autoSubmitToolbarInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientBasicSecretInput">clientBasicSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientUriInput">clientUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.consentMethodInput">consentMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.customClientIdInput">customClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.enduserNoteInput">enduserNoteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.grantTypesInput">grantTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.groupsClaimInput">groupsClaimInput</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.groupsInput">groupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.hideIosInput">hideIosInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.hideWebInput">hideWebInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.implicitAssignmentInput">implicitAssignmentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.issuerModeInput">issuerModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.jwksInput">jwksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks">OauthAppJwks</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.loginModeInput">loginModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.loginScopesInput">loginScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.loginUriInput">loginUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.logoInput">logoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.logoUriInput">logoUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.omitSecretInput">omitSecretInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.pkceRequiredInput">pkceRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.policyUriInput">policyUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.postLogoutRedirectUrisInput">postLogoutRedirectUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.profileInput">profileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.redirectUrisInput">redirectUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenLeewayInput">refreshTokenLeewayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenRotationInput">refreshTokenRotationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.responseTypesInput">responseTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.skipGroupsInput">skipGroupsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.skipUsersInput">skipUsersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts">OauthAppTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.tokenEndpointAuthMethodInput">tokenEndpointAuthMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.tosUriInput">tosUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateInput">userNameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplatePushStatusInput">userNameTemplatePushStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateSuffixInput">userNameTemplateSuffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateTypeInput">userNameTemplateTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.usersInput">usersInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers">OauthAppUsers</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.wildcardRedirectInput">wildcardRedirectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.adminNote">adminNote</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.appLinksJson">appLinksJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.appSettingsJson">appSettingsJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.authenticationPolicy">authenticationPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.autoKeyRotation">autoKeyRotation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientBasicSecret">clientBasicSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.clientUri">clientUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.consentMethod">consentMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.customClientId">customClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.enduserNote">enduserNote</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.grantTypes">grantTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.hideIos">hideIos</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.hideWeb">hideWeb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.implicitAssignment">implicitAssignment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.issuerMode">issuerMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.loginMode">loginMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.loginScopes">loginScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.loginUri">loginUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.logo">logo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.logoUri">logoUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.omitSecret">omitSecret</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.pkceRequired">pkceRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.policyUri">policyUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.postLogoutRedirectUris">postLogoutRedirectUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.profile">profile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.redirectUris">redirectUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenLeeway">refreshTokenLeeway</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenRotation">refreshTokenRotation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.responseTypes">responseTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.skipGroups">skipGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.skipUsers">skipUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.tokenEndpointAuthMethod">tokenEndpointAuthMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.tosUri">tosUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplate">userNameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateType">userNameTemplateType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.wildcardRedirect">wildcardRedirect</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.oauthApp.OauthApp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.oauthApp.OauthApp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.oauthApp.OauthApp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.oauthApp.OauthApp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.oauthApp.OauthApp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.oauthApp.OauthApp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.oauthApp.OauthApp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.oauthApp.OauthApp.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.oauthApp.OauthApp.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.oauthApp.OauthApp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.oauthApp.OauthApp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.oauthApp.OauthApp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.oauthApp.OauthApp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.oauthApp.OauthApp.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `groupsClaim`<sup>Required</sup> <a name="groupsClaim" id="@cdktf/provider-okta.oauthApp.OauthApp.property.groupsClaim"></a>

```java
public OauthAppGroupsClaimOutputReference getGroupsClaim();
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference">OauthAppGroupsClaimOutputReference</a>

---

##### `jwks`<sup>Required</sup> <a name="jwks" id="@cdktf/provider-okta.oauthApp.OauthApp.property.jwks"></a>

```java
public OauthAppJwksList getJwks();
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList">OauthAppJwksList</a>

---

##### `logoUrl`<sup>Required</sup> <a name="logoUrl" id="@cdktf/provider-okta.oauthApp.OauthApp.property.logoUrl"></a>

```java
public java.lang.String getLogoUrl();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.oauthApp.OauthApp.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `signOnMode`<sup>Required</sup> <a name="signOnMode" id="@cdktf/provider-okta.oauthApp.OauthApp.property.signOnMode"></a>

```java
public java.lang.String getSignOnMode();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-okta.oauthApp.OauthApp.property.timeouts"></a>

```java
public OauthAppTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference">OauthAppTimeoutsOutputReference</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-okta.oauthApp.OauthApp.property.users"></a>

```java
public OauthAppUsersList getUsers();
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList">OauthAppUsersList</a>

---

##### `accessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityErrorRedirectUrlInput"></a>

```java
public java.lang.String getAccessibilityErrorRedirectUrlInput();
```

- *Type:* java.lang.String

---

##### `accessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityLoginRedirectUrlInput"></a>

```java
public java.lang.String getAccessibilityLoginRedirectUrlInput();
```

- *Type:* java.lang.String

---

##### `accessibilitySelfServiceInput`<sup>Optional</sup> <a name="accessibilitySelfServiceInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilitySelfServiceInput"></a>

```java
public java.lang.Object getAccessibilitySelfServiceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `adminNoteInput`<sup>Optional</sup> <a name="adminNoteInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.adminNoteInput"></a>

```java
public java.lang.String getAdminNoteInput();
```

- *Type:* java.lang.String

---

##### `appLinksJsonInput`<sup>Optional</sup> <a name="appLinksJsonInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.appLinksJsonInput"></a>

```java
public java.lang.String getAppLinksJsonInput();
```

- *Type:* java.lang.String

---

##### `appSettingsJsonInput`<sup>Optional</sup> <a name="appSettingsJsonInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.appSettingsJsonInput"></a>

```java
public java.lang.String getAppSettingsJsonInput();
```

- *Type:* java.lang.String

---

##### `authenticationPolicyInput`<sup>Optional</sup> <a name="authenticationPolicyInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.authenticationPolicyInput"></a>

```java
public java.lang.String getAuthenticationPolicyInput();
```

- *Type:* java.lang.String

---

##### `autoKeyRotationInput`<sup>Optional</sup> <a name="autoKeyRotationInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.autoKeyRotationInput"></a>

```java
public java.lang.Object getAutoKeyRotationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoSubmitToolbarInput`<sup>Optional</sup> <a name="autoSubmitToolbarInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.autoSubmitToolbarInput"></a>

```java
public java.lang.Object getAutoSubmitToolbarInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientBasicSecretInput`<sup>Optional</sup> <a name="clientBasicSecretInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientBasicSecretInput"></a>

```java
public java.lang.String getClientBasicSecretInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientUriInput`<sup>Optional</sup> <a name="clientUriInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientUriInput"></a>

```java
public java.lang.String getClientUriInput();
```

- *Type:* java.lang.String

---

##### `consentMethodInput`<sup>Optional</sup> <a name="consentMethodInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.consentMethodInput"></a>

```java
public java.lang.String getConsentMethodInput();
```

- *Type:* java.lang.String

---

##### `customClientIdInput`<sup>Optional</sup> <a name="customClientIdInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.customClientIdInput"></a>

```java
public java.lang.String getCustomClientIdInput();
```

- *Type:* java.lang.String

---

##### `enduserNoteInput`<sup>Optional</sup> <a name="enduserNoteInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.enduserNoteInput"></a>

```java
public java.lang.String getEnduserNoteInput();
```

- *Type:* java.lang.String

---

##### `grantTypesInput`<sup>Optional</sup> <a name="grantTypesInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.grantTypesInput"></a>

```java
public java.util.List<java.lang.String> getGrantTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupsClaimInput`<sup>Optional</sup> <a name="groupsClaimInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.groupsClaimInput"></a>

```java
public OauthAppGroupsClaim getGroupsClaimInput();
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a>

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.groupsInput"></a>

```java
public java.util.List<java.lang.String> getGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hideIosInput`<sup>Optional</sup> <a name="hideIosInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.hideIosInput"></a>

```java
public java.lang.Object getHideIosInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hideWebInput`<sup>Optional</sup> <a name="hideWebInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.hideWebInput"></a>

```java
public java.lang.Object getHideWebInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `implicitAssignmentInput`<sup>Optional</sup> <a name="implicitAssignmentInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.implicitAssignmentInput"></a>

```java
public java.lang.Object getImplicitAssignmentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `issuerModeInput`<sup>Optional</sup> <a name="issuerModeInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.issuerModeInput"></a>

```java
public java.lang.String getIssuerModeInput();
```

- *Type:* java.lang.String

---

##### `jwksInput`<sup>Optional</sup> <a name="jwksInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.jwksInput"></a>

```java
public java.lang.Object getJwksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks">OauthAppJwks</a>>

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `loginModeInput`<sup>Optional</sup> <a name="loginModeInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.loginModeInput"></a>

```java
public java.lang.String getLoginModeInput();
```

- *Type:* java.lang.String

---

##### `loginScopesInput`<sup>Optional</sup> <a name="loginScopesInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.loginScopesInput"></a>

```java
public java.util.List<java.lang.String> getLoginScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loginUriInput`<sup>Optional</sup> <a name="loginUriInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.loginUriInput"></a>

```java
public java.lang.String getLoginUriInput();
```

- *Type:* java.lang.String

---

##### `logoInput`<sup>Optional</sup> <a name="logoInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.logoInput"></a>

```java
public java.lang.String getLogoInput();
```

- *Type:* java.lang.String

---

##### `logoUriInput`<sup>Optional</sup> <a name="logoUriInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.logoUriInput"></a>

```java
public java.lang.String getLogoUriInput();
```

- *Type:* java.lang.String

---

##### `omitSecretInput`<sup>Optional</sup> <a name="omitSecretInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.omitSecretInput"></a>

```java
public java.lang.Object getOmitSecretInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pkceRequiredInput`<sup>Optional</sup> <a name="pkceRequiredInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.pkceRequiredInput"></a>

```java
public java.lang.Object getPkceRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `policyUriInput`<sup>Optional</sup> <a name="policyUriInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.policyUriInput"></a>

```java
public java.lang.String getPolicyUriInput();
```

- *Type:* java.lang.String

---

##### `postLogoutRedirectUrisInput`<sup>Optional</sup> <a name="postLogoutRedirectUrisInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.postLogoutRedirectUrisInput"></a>

```java
public java.util.List<java.lang.String> getPostLogoutRedirectUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.profileInput"></a>

```java
public java.lang.String getProfileInput();
```

- *Type:* java.lang.String

---

##### `redirectUrisInput`<sup>Optional</sup> <a name="redirectUrisInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.redirectUrisInput"></a>

```java
public java.util.List<java.lang.String> getRedirectUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `refreshTokenLeewayInput`<sup>Optional</sup> <a name="refreshTokenLeewayInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenLeewayInput"></a>

```java
public java.lang.Number getRefreshTokenLeewayInput();
```

- *Type:* java.lang.Number

---

##### `refreshTokenRotationInput`<sup>Optional</sup> <a name="refreshTokenRotationInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenRotationInput"></a>

```java
public java.lang.String getRefreshTokenRotationInput();
```

- *Type:* java.lang.String

---

##### `responseTypesInput`<sup>Optional</sup> <a name="responseTypesInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.responseTypesInput"></a>

```java
public java.util.List<java.lang.String> getResponseTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `skipGroupsInput`<sup>Optional</sup> <a name="skipGroupsInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.skipGroupsInput"></a>

```java
public java.lang.Object getSkipGroupsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipUsersInput`<sup>Optional</sup> <a name="skipUsersInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.skipUsersInput"></a>

```java
public java.lang.Object getSkipUsersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts">OauthAppTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `tokenEndpointAuthMethodInput`<sup>Optional</sup> <a name="tokenEndpointAuthMethodInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.tokenEndpointAuthMethodInput"></a>

```java
public java.lang.String getTokenEndpointAuthMethodInput();
```

- *Type:* java.lang.String

---

##### `tosUriInput`<sup>Optional</sup> <a name="tosUriInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.tosUriInput"></a>

```java
public java.lang.String getTosUriInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `userNameTemplateInput`<sup>Optional</sup> <a name="userNameTemplateInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateInput"></a>

```java
public java.lang.String getUserNameTemplateInput();
```

- *Type:* java.lang.String

---

##### `userNameTemplatePushStatusInput`<sup>Optional</sup> <a name="userNameTemplatePushStatusInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplatePushStatusInput"></a>

```java
public java.lang.String getUserNameTemplatePushStatusInput();
```

- *Type:* java.lang.String

---

##### `userNameTemplateSuffixInput`<sup>Optional</sup> <a name="userNameTemplateSuffixInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateSuffixInput"></a>

```java
public java.lang.String getUserNameTemplateSuffixInput();
```

- *Type:* java.lang.String

---

##### `userNameTemplateTypeInput`<sup>Optional</sup> <a name="userNameTemplateTypeInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateTypeInput"></a>

```java
public java.lang.String getUserNameTemplateTypeInput();
```

- *Type:* java.lang.String

---

##### `usersInput`<sup>Optional</sup> <a name="usersInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.usersInput"></a>

```java
public java.lang.Object getUsersInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers">OauthAppUsers</a>>

---

##### `wildcardRedirectInput`<sup>Optional</sup> <a name="wildcardRedirectInput" id="@cdktf/provider-okta.oauthApp.OauthApp.property.wildcardRedirectInput"></a>

```java
public java.lang.String getWildcardRedirectInput();
```

- *Type:* java.lang.String

---

##### `accessibilityErrorRedirectUrl`<sup>Required</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityErrorRedirectUrl"></a>

```java
public java.lang.String getAccessibilityErrorRedirectUrl();
```

- *Type:* java.lang.String

---

##### `accessibilityLoginRedirectUrl`<sup>Required</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilityLoginRedirectUrl"></a>

```java
public java.lang.String getAccessibilityLoginRedirectUrl();
```

- *Type:* java.lang.String

---

##### `accessibilitySelfService`<sup>Required</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.oauthApp.OauthApp.property.accessibilitySelfService"></a>

```java
public java.lang.Object getAccessibilitySelfService();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `adminNote`<sup>Required</sup> <a name="adminNote" id="@cdktf/provider-okta.oauthApp.OauthApp.property.adminNote"></a>

```java
public java.lang.String getAdminNote();
```

- *Type:* java.lang.String

---

##### `appLinksJson`<sup>Required</sup> <a name="appLinksJson" id="@cdktf/provider-okta.oauthApp.OauthApp.property.appLinksJson"></a>

```java
public java.lang.String getAppLinksJson();
```

- *Type:* java.lang.String

---

##### `appSettingsJson`<sup>Required</sup> <a name="appSettingsJson" id="@cdktf/provider-okta.oauthApp.OauthApp.property.appSettingsJson"></a>

```java
public java.lang.String getAppSettingsJson();
```

- *Type:* java.lang.String

---

##### `authenticationPolicy`<sup>Required</sup> <a name="authenticationPolicy" id="@cdktf/provider-okta.oauthApp.OauthApp.property.authenticationPolicy"></a>

```java
public java.lang.String getAuthenticationPolicy();
```

- *Type:* java.lang.String

---

##### `autoKeyRotation`<sup>Required</sup> <a name="autoKeyRotation" id="@cdktf/provider-okta.oauthApp.OauthApp.property.autoKeyRotation"></a>

```java
public java.lang.Object getAutoKeyRotation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoSubmitToolbar`<sup>Required</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.oauthApp.OauthApp.property.autoSubmitToolbar"></a>

```java
public java.lang.Object getAutoSubmitToolbar();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientBasicSecret`<sup>Required</sup> <a name="clientBasicSecret" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientBasicSecret"></a>

```java
public java.lang.String getClientBasicSecret();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientUri`<sup>Required</sup> <a name="clientUri" id="@cdktf/provider-okta.oauthApp.OauthApp.property.clientUri"></a>

```java
public java.lang.String getClientUri();
```

- *Type:* java.lang.String

---

##### `consentMethod`<sup>Required</sup> <a name="consentMethod" id="@cdktf/provider-okta.oauthApp.OauthApp.property.consentMethod"></a>

```java
public java.lang.String getConsentMethod();
```

- *Type:* java.lang.String

---

##### `customClientId`<sup>Required</sup> <a name="customClientId" id="@cdktf/provider-okta.oauthApp.OauthApp.property.customClientId"></a>

```java
public java.lang.String getCustomClientId();
```

- *Type:* java.lang.String

---

##### `enduserNote`<sup>Required</sup> <a name="enduserNote" id="@cdktf/provider-okta.oauthApp.OauthApp.property.enduserNote"></a>

```java
public java.lang.String getEnduserNote();
```

- *Type:* java.lang.String

---

##### `grantTypes`<sup>Required</sup> <a name="grantTypes" id="@cdktf/provider-okta.oauthApp.OauthApp.property.grantTypes"></a>

```java
public java.util.List<java.lang.String> getGrantTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-okta.oauthApp.OauthApp.property.groups"></a>

```java
public java.util.List<java.lang.String> getGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hideIos`<sup>Required</sup> <a name="hideIos" id="@cdktf/provider-okta.oauthApp.OauthApp.property.hideIos"></a>

```java
public java.lang.Object getHideIos();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hideWeb`<sup>Required</sup> <a name="hideWeb" id="@cdktf/provider-okta.oauthApp.OauthApp.property.hideWeb"></a>

```java
public java.lang.Object getHideWeb();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.oauthApp.OauthApp.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `implicitAssignment`<sup>Required</sup> <a name="implicitAssignment" id="@cdktf/provider-okta.oauthApp.OauthApp.property.implicitAssignment"></a>

```java
public java.lang.Object getImplicitAssignment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `issuerMode`<sup>Required</sup> <a name="issuerMode" id="@cdktf/provider-okta.oauthApp.OauthApp.property.issuerMode"></a>

```java
public java.lang.String getIssuerMode();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.oauthApp.OauthApp.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `loginMode`<sup>Required</sup> <a name="loginMode" id="@cdktf/provider-okta.oauthApp.OauthApp.property.loginMode"></a>

```java
public java.lang.String getLoginMode();
```

- *Type:* java.lang.String

---

##### `loginScopes`<sup>Required</sup> <a name="loginScopes" id="@cdktf/provider-okta.oauthApp.OauthApp.property.loginScopes"></a>

```java
public java.util.List<java.lang.String> getLoginScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loginUri`<sup>Required</sup> <a name="loginUri" id="@cdktf/provider-okta.oauthApp.OauthApp.property.loginUri"></a>

```java
public java.lang.String getLoginUri();
```

- *Type:* java.lang.String

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.oauthApp.OauthApp.property.logo"></a>

```java
public java.lang.String getLogo();
```

- *Type:* java.lang.String

---

##### `logoUri`<sup>Required</sup> <a name="logoUri" id="@cdktf/provider-okta.oauthApp.OauthApp.property.logoUri"></a>

```java
public java.lang.String getLogoUri();
```

- *Type:* java.lang.String

---

##### `omitSecret`<sup>Required</sup> <a name="omitSecret" id="@cdktf/provider-okta.oauthApp.OauthApp.property.omitSecret"></a>

```java
public java.lang.Object getOmitSecret();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pkceRequired`<sup>Required</sup> <a name="pkceRequired" id="@cdktf/provider-okta.oauthApp.OauthApp.property.pkceRequired"></a>

```java
public java.lang.Object getPkceRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `policyUri`<sup>Required</sup> <a name="policyUri" id="@cdktf/provider-okta.oauthApp.OauthApp.property.policyUri"></a>

```java
public java.lang.String getPolicyUri();
```

- *Type:* java.lang.String

---

##### `postLogoutRedirectUris`<sup>Required</sup> <a name="postLogoutRedirectUris" id="@cdktf/provider-okta.oauthApp.OauthApp.property.postLogoutRedirectUris"></a>

```java
public java.util.List<java.lang.String> getPostLogoutRedirectUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-okta.oauthApp.OauthApp.property.profile"></a>

```java
public java.lang.String getProfile();
```

- *Type:* java.lang.String

---

##### `redirectUris`<sup>Required</sup> <a name="redirectUris" id="@cdktf/provider-okta.oauthApp.OauthApp.property.redirectUris"></a>

```java
public java.util.List<java.lang.String> getRedirectUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `refreshTokenLeeway`<sup>Required</sup> <a name="refreshTokenLeeway" id="@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenLeeway"></a>

```java
public java.lang.Number getRefreshTokenLeeway();
```

- *Type:* java.lang.Number

---

##### `refreshTokenRotation`<sup>Required</sup> <a name="refreshTokenRotation" id="@cdktf/provider-okta.oauthApp.OauthApp.property.refreshTokenRotation"></a>

```java
public java.lang.String getRefreshTokenRotation();
```

- *Type:* java.lang.String

---

##### `responseTypes`<sup>Required</sup> <a name="responseTypes" id="@cdktf/provider-okta.oauthApp.OauthApp.property.responseTypes"></a>

```java
public java.util.List<java.lang.String> getResponseTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `skipGroups`<sup>Required</sup> <a name="skipGroups" id="@cdktf/provider-okta.oauthApp.OauthApp.property.skipGroups"></a>

```java
public java.lang.Object getSkipGroups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipUsers`<sup>Required</sup> <a name="skipUsers" id="@cdktf/provider-okta.oauthApp.OauthApp.property.skipUsers"></a>

```java
public java.lang.Object getSkipUsers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.oauthApp.OauthApp.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tokenEndpointAuthMethod`<sup>Required</sup> <a name="tokenEndpointAuthMethod" id="@cdktf/provider-okta.oauthApp.OauthApp.property.tokenEndpointAuthMethod"></a>

```java
public java.lang.String getTokenEndpointAuthMethod();
```

- *Type:* java.lang.String

---

##### `tosUri`<sup>Required</sup> <a name="tosUri" id="@cdktf/provider-okta.oauthApp.OauthApp.property.tosUri"></a>

```java
public java.lang.String getTosUri();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.oauthApp.OauthApp.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `userNameTemplate`<sup>Required</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplate"></a>

```java
public java.lang.String getUserNameTemplate();
```

- *Type:* java.lang.String

---

##### `userNameTemplatePushStatus`<sup>Required</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplatePushStatus"></a>

```java
public java.lang.String getUserNameTemplatePushStatus();
```

- *Type:* java.lang.String

---

##### `userNameTemplateSuffix`<sup>Required</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateSuffix"></a>

```java
public java.lang.String getUserNameTemplateSuffix();
```

- *Type:* java.lang.String

---

##### `userNameTemplateType`<sup>Required</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.oauthApp.OauthApp.property.userNameTemplateType"></a>

```java
public java.lang.String getUserNameTemplateType();
```

- *Type:* java.lang.String

---

##### `wildcardRedirect`<sup>Required</sup> <a name="wildcardRedirect" id="@cdktf/provider-okta.oauthApp.OauthApp.property.wildcardRedirect"></a>

```java
public java.lang.String getWildcardRedirect();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthApp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.oauthApp.OauthApp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OauthAppConfig <a name="OauthAppConfig" id="@cdktf/provider-okta.oauthApp.OauthAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.oauth_app.OauthAppConfig;

OauthAppConfig.builder()
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
    .type(java.lang.String)
//  .accessibilityErrorRedirectUrl(java.lang.String)
//  .accessibilityLoginRedirectUrl(java.lang.String)
//  .accessibilitySelfService(java.lang.Boolean)
//  .accessibilitySelfService(IResolvable)
//  .adminNote(java.lang.String)
//  .appLinksJson(java.lang.String)
//  .appSettingsJson(java.lang.String)
//  .authenticationPolicy(java.lang.String)
//  .autoKeyRotation(java.lang.Boolean)
//  .autoKeyRotation(IResolvable)
//  .autoSubmitToolbar(java.lang.Boolean)
//  .autoSubmitToolbar(IResolvable)
//  .clientBasicSecret(java.lang.String)
//  .clientId(java.lang.String)
//  .clientUri(java.lang.String)
//  .consentMethod(java.lang.String)
//  .customClientId(java.lang.String)
//  .enduserNote(java.lang.String)
//  .grantTypes(java.util.List<java.lang.String>)
//  .groups(java.util.List<java.lang.String>)
//  .groupsClaim(OauthAppGroupsClaim)
//  .hideIos(java.lang.Boolean)
//  .hideIos(IResolvable)
//  .hideWeb(java.lang.Boolean)
//  .hideWeb(IResolvable)
//  .id(java.lang.String)
//  .implicitAssignment(java.lang.Boolean)
//  .implicitAssignment(IResolvable)
//  .issuerMode(java.lang.String)
//  .jwks(IResolvable)
//  .jwks(java.util.List<OauthAppJwks>)
//  .loginMode(java.lang.String)
//  .loginScopes(java.util.List<java.lang.String>)
//  .loginUri(java.lang.String)
//  .logo(java.lang.String)
//  .logoUri(java.lang.String)
//  .omitSecret(java.lang.Boolean)
//  .omitSecret(IResolvable)
//  .pkceRequired(java.lang.Boolean)
//  .pkceRequired(IResolvable)
//  .policyUri(java.lang.String)
//  .postLogoutRedirectUris(java.util.List<java.lang.String>)
//  .profile(java.lang.String)
//  .redirectUris(java.util.List<java.lang.String>)
//  .refreshTokenLeeway(java.lang.Number)
//  .refreshTokenRotation(java.lang.String)
//  .responseTypes(java.util.List<java.lang.String>)
//  .skipGroups(java.lang.Boolean)
//  .skipGroups(IResolvable)
//  .skipUsers(java.lang.Boolean)
//  .skipUsers(IResolvable)
//  .status(java.lang.String)
//  .timeouts(OauthAppTimeouts)
//  .tokenEndpointAuthMethod(java.lang.String)
//  .tosUri(java.lang.String)
//  .userNameTemplate(java.lang.String)
//  .userNameTemplatePushStatus(java.lang.String)
//  .userNameTemplateSuffix(java.lang.String)
//  .userNameTemplateType(java.lang.String)
//  .users(IResolvable)
//  .users(java.util.List<OauthAppUsers>)
//  .wildcardRedirect(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.label">label</a></code> | <code>java.lang.String</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of client application. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>java.lang.String</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>java.lang.String</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.adminNote">adminNote</a></code> | <code>java.lang.String</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.appLinksJson">appLinksJson</a></code> | <code>java.lang.String</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.appSettingsJson">appSettingsJson</a></code> | <code>java.lang.String</code> | Application settings in JSON format. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.authenticationPolicy">authenticationPolicy</a></code> | <code>java.lang.String</code> | Id of this apps authentication policy. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.autoKeyRotation">autoKeyRotation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Requested key rotation mode. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.clientBasicSecret">clientBasicSecret</a></code> | <code>java.lang.String</code> | OAuth client secret key, this can be set when token_endpoint_auth_method is client_secret_basic. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | OAuth client ID. If set during creation, app is created with this id. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.clientUri">clientUri</a></code> | <code>java.lang.String</code> | URI to a web page providing information about the client. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.consentMethod">consentMethod</a></code> | <code>java.lang.String</code> | *Early Access Property*. Indicates whether user consent is required or implicit. Valid values: REQUIRED, TRUSTED. Default value is TRUSTED. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.customClientId">customClientId</a></code> | <code>java.lang.String</code> | **Deprecated** This property allows you to set your client_id during creation. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.enduserNote">enduserNote</a></code> | <code>java.lang.String</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.grantTypes">grantTypes</a></code> | <code>java.util.List<java.lang.String></code> | List of OAuth 2.0 grant types. Conditional validation params found here https://developer.okta.com/docs/api/resources/apps#credentials-settings-details. Defaults to minimum requirements per app type. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | Groups associated with the application. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.groupsClaim">groupsClaim</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a></code> | groups_claim block. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.hideIos">hideIos</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.hideWeb">hideWeb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#id OauthApp#id}. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.implicitAssignment">implicitAssignment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *Early Access Property*. Enable Federation Broker Mode. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.issuerMode">issuerMode</a></code> | <code>java.lang.String</code> | *Early Access Property*. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.jwks">jwks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks">OauthAppJwks</a>></code> | jwks block. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.loginMode">loginMode</a></code> | <code>java.lang.String</code> | The type of Idp-Initiated login that the client supports, if any. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.loginScopes">loginScopes</a></code> | <code>java.util.List<java.lang.String></code> | List of scopes to use for the request. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.loginUri">loginUri</a></code> | <code>java.lang.String</code> | URI that initiates login. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.logo">logo</a></code> | <code>java.lang.String</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.logoUri">logoUri</a></code> | <code>java.lang.String</code> | URI that references a logo for the client. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.omitSecret">omitSecret</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This tells the provider not to persist the application's secret to state. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.pkceRequired">pkceRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Require Proof Key for Code Exchange (PKCE) for additional verification key rotation mode. See: https://developer.okta.com/docs/reference/api/apps/#oauth-credential-object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.policyUri">policyUri</a></code> | <code>java.lang.String</code> | URI to web page providing client policy document. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.postLogoutRedirectUris">postLogoutRedirectUris</a></code> | <code>java.util.List<java.lang.String></code> | List of URIs for redirection after logout. Note: see okta_app_oauth_post_logout_redirect_uri for appending to this list in a decentralized way. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.profile">profile</a></code> | <code>java.lang.String</code> | Custom JSON that represents an OAuth application's profile. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.redirectUris">redirectUris</a></code> | <code>java.util.List<java.lang.String></code> | List of URIs for use in the redirect-based flow. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.refreshTokenLeeway">refreshTokenLeeway</a></code> | <code>java.lang.Number</code> | *Early Access Property* Grace period for token rotation. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.refreshTokenRotation">refreshTokenRotation</a></code> | <code>java.lang.String</code> | *Early Access Property* Refresh token rotation behavior. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.responseTypes">responseTypes</a></code> | <code>java.util.List<java.lang.String></code> | List of OAuth 2.0 response type strings. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.skipGroups">skipGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.skipUsers">skipUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.status">status</a></code> | <code>java.lang.String</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts">OauthAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.tokenEndpointAuthMethod">tokenEndpointAuthMethod</a></code> | <code>java.lang.String</code> | Requested authentication method for the token endpoint. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.tosUri">tosUri</a></code> | <code>java.lang.String</code> | URI to web page providing client tos (terms of service). |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplate">userNameTemplate</a></code> | <code>java.lang.String</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>java.lang.String</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>java.lang.String</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplateType">userNameTemplateType</a></code> | <code>java.lang.String</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.users">users</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers">OauthAppUsers</a>></code> | users block. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppConfig.property.wildcardRedirect">wildcardRedirect</a></code> | <code>java.lang.String</code> | *Early Access Property*. Indicates if the client is allowed to use wildcard matching of redirect_uris. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Pretty name of app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#label OauthApp#label}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of client application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#type OauthApp#type}

---

##### `accessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.accessibilityErrorRedirectUrl"></a>

```java
public java.lang.String getAccessibilityErrorRedirectUrl();
```

- *Type:* java.lang.String

Custom error page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#accessibility_error_redirect_url OauthApp#accessibility_error_redirect_url}

---

##### `accessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.accessibilityLoginRedirectUrl"></a>

```java
public java.lang.String getAccessibilityLoginRedirectUrl();
```

- *Type:* java.lang.String

Custom login page URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#accessibility_login_redirect_url OauthApp#accessibility_login_redirect_url}

---

##### `accessibilitySelfService`<sup>Optional</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.accessibilitySelfService"></a>

```java
public java.lang.Object getAccessibilitySelfService();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable self service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#accessibility_self_service OauthApp#accessibility_self_service}

---

##### `adminNote`<sup>Optional</sup> <a name="adminNote" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.adminNote"></a>

```java
public java.lang.String getAdminNote();
```

- *Type:* java.lang.String

Application notes for admins.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#admin_note OauthApp#admin_note}

---

##### `appLinksJson`<sup>Optional</sup> <a name="appLinksJson" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.appLinksJson"></a>

```java
public java.lang.String getAppLinksJson();
```

- *Type:* java.lang.String

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#app_links_json OauthApp#app_links_json}

---

##### `appSettingsJson`<sup>Optional</sup> <a name="appSettingsJson" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.appSettingsJson"></a>

```java
public java.lang.String getAppSettingsJson();
```

- *Type:* java.lang.String

Application settings in JSON format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#app_settings_json OauthApp#app_settings_json}

---

##### `authenticationPolicy`<sup>Optional</sup> <a name="authenticationPolicy" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.authenticationPolicy"></a>

```java
public java.lang.String getAuthenticationPolicy();
```

- *Type:* java.lang.String

Id of this apps authentication policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#authentication_policy OauthApp#authentication_policy}

---

##### `autoKeyRotation`<sup>Optional</sup> <a name="autoKeyRotation" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.autoKeyRotation"></a>

```java
public java.lang.Object getAutoKeyRotation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Requested key rotation mode.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#auto_key_rotation OauthApp#auto_key_rotation}

---

##### `autoSubmitToolbar`<sup>Optional</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.autoSubmitToolbar"></a>

```java
public java.lang.Object getAutoSubmitToolbar();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#auto_submit_toolbar OauthApp#auto_submit_toolbar}

---

##### `clientBasicSecret`<sup>Optional</sup> <a name="clientBasicSecret" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.clientBasicSecret"></a>

```java
public java.lang.String getClientBasicSecret();
```

- *Type:* java.lang.String

OAuth client secret key, this can be set when token_endpoint_auth_method is client_secret_basic.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#client_basic_secret OauthApp#client_basic_secret}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

OAuth client ID. If set during creation, app is created with this id.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#client_id OauthApp#client_id}

---

##### `clientUri`<sup>Optional</sup> <a name="clientUri" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.clientUri"></a>

```java
public java.lang.String getClientUri();
```

- *Type:* java.lang.String

URI to a web page providing information about the client.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#client_uri OauthApp#client_uri}

---

##### `consentMethod`<sup>Optional</sup> <a name="consentMethod" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.consentMethod"></a>

```java
public java.lang.String getConsentMethod();
```

- *Type:* java.lang.String

*Early Access Property*. Indicates whether user consent is required or implicit. Valid values: REQUIRED, TRUSTED. Default value is TRUSTED.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#consent_method OauthApp#consent_method}

---

##### `customClientId`<sup>Optional</sup> <a name="customClientId" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.customClientId"></a>

```java
public java.lang.String getCustomClientId();
```

- *Type:* java.lang.String

**Deprecated** This property allows you to set your client_id during creation.

NOTE: updating after creation will be a no-op, use client_id for that behavior instead.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#custom_client_id OauthApp#custom_client_id}

---

##### `enduserNote`<sup>Optional</sup> <a name="enduserNote" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.enduserNote"></a>

```java
public java.lang.String getEnduserNote();
```

- *Type:* java.lang.String

Application notes for end users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#enduser_note OauthApp#enduser_note}

---

##### `grantTypes`<sup>Optional</sup> <a name="grantTypes" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.grantTypes"></a>

```java
public java.util.List<java.lang.String> getGrantTypes();
```

- *Type:* java.util.List<java.lang.String>

List of OAuth 2.0 grant types. Conditional validation params found here https://developer.okta.com/docs/api/resources/apps#credentials-settings-details. Defaults to minimum requirements per app type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#grant_types OauthApp#grant_types}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.groups"></a>

```java
public java.util.List<java.lang.String> getGroups();
```

- *Type:* java.util.List<java.lang.String>

Groups associated with the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#groups OauthApp#groups}

---

##### `groupsClaim`<sup>Optional</sup> <a name="groupsClaim" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.groupsClaim"></a>

```java
public OauthAppGroupsClaim getGroupsClaim();
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a>

groups_claim block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#groups_claim OauthApp#groups_claim}

---

##### `hideIos`<sup>Optional</sup> <a name="hideIos" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.hideIos"></a>

```java
public java.lang.Object getHideIos();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#hide_ios OauthApp#hide_ios}

---

##### `hideWeb`<sup>Optional</sup> <a name="hideWeb" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.hideWeb"></a>

```java
public java.lang.Object getHideWeb();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon to users.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#hide_web OauthApp#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#id OauthApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `implicitAssignment`<sup>Optional</sup> <a name="implicitAssignment" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.implicitAssignment"></a>

```java
public java.lang.Object getImplicitAssignment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

*Early Access Property*. Enable Federation Broker Mode.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#implicit_assignment OauthApp#implicit_assignment}

---

##### `issuerMode`<sup>Optional</sup> <a name="issuerMode" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.issuerMode"></a>

```java
public java.lang.String getIssuerMode();
```

- *Type:* java.lang.String

*Early Access Property*.

Indicates whether the Okta Authorization Server uses the original Okta org domain URL or a custom domain URL as the issuer of ID token for this client.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#issuer_mode OauthApp#issuer_mode}

---

##### `jwks`<sup>Optional</sup> <a name="jwks" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.jwks"></a>

```java
public java.lang.Object getJwks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks">OauthAppJwks</a>>

jwks block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#jwks OauthApp#jwks}

---

##### `loginMode`<sup>Optional</sup> <a name="loginMode" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.loginMode"></a>

```java
public java.lang.String getLoginMode();
```

- *Type:* java.lang.String

The type of Idp-Initiated login that the client supports, if any.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#login_mode OauthApp#login_mode}

---

##### `loginScopes`<sup>Optional</sup> <a name="loginScopes" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.loginScopes"></a>

```java
public java.util.List<java.lang.String> getLoginScopes();
```

- *Type:* java.util.List<java.lang.String>

List of scopes to use for the request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#login_scopes OauthApp#login_scopes}

---

##### `loginUri`<sup>Optional</sup> <a name="loginUri" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.loginUri"></a>

```java
public java.lang.String getLoginUri();
```

- *Type:* java.lang.String

URI that initiates login.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#login_uri OauthApp#login_uri}

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.logo"></a>

```java
public java.lang.String getLogo();
```

- *Type:* java.lang.String

Local path to logo of the application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#logo OauthApp#logo}

---

##### `logoUri`<sup>Optional</sup> <a name="logoUri" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.logoUri"></a>

```java
public java.lang.String getLogoUri();
```

- *Type:* java.lang.String

URI that references a logo for the client.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#logo_uri OauthApp#logo_uri}

---

##### `omitSecret`<sup>Optional</sup> <a name="omitSecret" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.omitSecret"></a>

```java
public java.lang.Object getOmitSecret();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This tells the provider not to persist the application's secret to state.

If this is ever changes from true => false your app will be recreated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#omit_secret OauthApp#omit_secret}

---

##### `pkceRequired`<sup>Optional</sup> <a name="pkceRequired" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.pkceRequired"></a>

```java
public java.lang.Object getPkceRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Require Proof Key for Code Exchange (PKCE) for additional verification key rotation mode. See: https://developer.okta.com/docs/reference/api/apps/#oauth-credential-object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#pkce_required OauthApp#pkce_required}

---

##### `policyUri`<sup>Optional</sup> <a name="policyUri" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.policyUri"></a>

```java
public java.lang.String getPolicyUri();
```

- *Type:* java.lang.String

URI to web page providing client policy document.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#policy_uri OauthApp#policy_uri}

---

##### `postLogoutRedirectUris`<sup>Optional</sup> <a name="postLogoutRedirectUris" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.postLogoutRedirectUris"></a>

```java
public java.util.List<java.lang.String> getPostLogoutRedirectUris();
```

- *Type:* java.util.List<java.lang.String>

List of URIs for redirection after logout. Note: see okta_app_oauth_post_logout_redirect_uri for appending to this list in a decentralized way.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#post_logout_redirect_uris OauthApp#post_logout_redirect_uris}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.profile"></a>

```java
public java.lang.String getProfile();
```

- *Type:* java.lang.String

Custom JSON that represents an OAuth application's profile.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#profile OauthApp#profile}

---

##### `redirectUris`<sup>Optional</sup> <a name="redirectUris" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.redirectUris"></a>

```java
public java.util.List<java.lang.String> getRedirectUris();
```

- *Type:* java.util.List<java.lang.String>

List of URIs for use in the redirect-based flow.

This is required for all application types except service. Note: see okta_app_oauth_redirect_uri for appending to this list in a decentralized way.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#redirect_uris OauthApp#redirect_uris}

---

##### `refreshTokenLeeway`<sup>Optional</sup> <a name="refreshTokenLeeway" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.refreshTokenLeeway"></a>

```java
public java.lang.Number getRefreshTokenLeeway();
```

- *Type:* java.lang.Number

*Early Access Property* Grace period for token rotation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#refresh_token_leeway OauthApp#refresh_token_leeway}

---

##### `refreshTokenRotation`<sup>Optional</sup> <a name="refreshTokenRotation" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.refreshTokenRotation"></a>

```java
public java.lang.String getRefreshTokenRotation();
```

- *Type:* java.lang.String

*Early Access Property* Refresh token rotation behavior.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#refresh_token_rotation OauthApp#refresh_token_rotation}

---

##### `responseTypes`<sup>Optional</sup> <a name="responseTypes" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.responseTypes"></a>

```java
public java.util.List<java.lang.String> getResponseTypes();
```

- *Type:* java.util.List<java.lang.String>

List of OAuth 2.0 response type strings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#response_types OauthApp#response_types}

---

##### `skipGroups`<sup>Optional</sup> <a name="skipGroups" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.skipGroups"></a>

```java
public java.lang.Object getSkipGroups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#skip_groups OauthApp#skip_groups}

---

##### `skipUsers`<sup>Optional</sup> <a name="skipUsers" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.skipUsers"></a>

```java
public java.lang.Object getSkipUsers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#skip_users OauthApp#skip_users}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Status of application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#status OauthApp#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.timeouts"></a>

```java
public OauthAppTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts">OauthAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#timeouts OauthApp#timeouts}

---

##### `tokenEndpointAuthMethod`<sup>Optional</sup> <a name="tokenEndpointAuthMethod" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.tokenEndpointAuthMethod"></a>

```java
public java.lang.String getTokenEndpointAuthMethod();
```

- *Type:* java.lang.String

Requested authentication method for the token endpoint.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#token_endpoint_auth_method OauthApp#token_endpoint_auth_method}

---

##### `tosUri`<sup>Optional</sup> <a name="tosUri" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.tosUri"></a>

```java
public java.lang.String getTosUri();
```

- *Type:* java.lang.String

URI to web page providing client tos (terms of service).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#tos_uri OauthApp#tos_uri}

---

##### `userNameTemplate`<sup>Optional</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplate"></a>

```java
public java.lang.String getUserNameTemplate();
```

- *Type:* java.lang.String

Username template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#user_name_template OauthApp#user_name_template}

---

##### `userNameTemplatePushStatus`<sup>Optional</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplatePushStatus"></a>

```java
public java.lang.String getUserNameTemplatePushStatus();
```

- *Type:* java.lang.String

Push username on update.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#user_name_template_push_status OauthApp#user_name_template_push_status}

---

##### `userNameTemplateSuffix`<sup>Optional</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplateSuffix"></a>

```java
public java.lang.String getUserNameTemplateSuffix();
```

- *Type:* java.lang.String

Username template suffix.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#user_name_template_suffix OauthApp#user_name_template_suffix}

---

##### `userNameTemplateType`<sup>Optional</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.userNameTemplateType"></a>

```java
public java.lang.String getUserNameTemplateType();
```

- *Type:* java.lang.String

Username template type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#user_name_template_type OauthApp#user_name_template_type}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.users"></a>

```java
public java.lang.Object getUsers();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers">OauthAppUsers</a>>

users block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#users OauthApp#users}

---

##### `wildcardRedirect`<sup>Optional</sup> <a name="wildcardRedirect" id="@cdktf/provider-okta.oauthApp.OauthAppConfig.property.wildcardRedirect"></a>

```java
public java.lang.String getWildcardRedirect();
```

- *Type:* java.lang.String

*Early Access Property*. Indicates if the client is allowed to use wildcard matching of redirect_uris.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#wildcard_redirect OauthApp#wildcard_redirect}

---

### OauthAppGroupsClaim <a name="OauthAppGroupsClaim" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.oauth_app.OauthAppGroupsClaim;

OauthAppGroupsClaim.builder()
    .name(java.lang.String)
    .type(java.lang.String)
    .value(java.lang.String)
//  .filterType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.name">name</a></code> | <code>java.lang.String</code> | Name of the claim that will be used in the token. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.type">type</a></code> | <code>java.lang.String</code> | Groups claim type. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.value">value</a></code> | <code>java.lang.String</code> | Value of the claim. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.filterType">filterType</a></code> | <code>java.lang.String</code> | Groups claim filter. Can only be set if type is FILTER. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the claim that will be used in the token.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#name OauthApp#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Groups claim type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#type OauthApp#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Value of the claim.

Can be an Okta Expression Language statement that evaluates at the time the token is minted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#value OauthApp#value}

---

##### `filterType`<sup>Optional</sup> <a name="filterType" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

Groups claim filter. Can only be set if type is FILTER.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#filter_type OauthApp#filter_type}

---

### OauthAppJwks <a name="OauthAppJwks" id="@cdktf/provider-okta.oauthApp.OauthAppJwks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.oauthApp.OauthAppJwks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.oauth_app.OauthAppJwks;

OauthAppJwks.builder()
    .kid(java.lang.String)
    .kty(java.lang.String)
//  .e(java.lang.String)
//  .n(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks.property.kid">kid</a></code> | <code>java.lang.String</code> | Key ID. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks.property.kty">kty</a></code> | <code>java.lang.String</code> | Key type. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks.property.e">e</a></code> | <code>java.lang.String</code> | RSA Exponent. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks.property.n">n</a></code> | <code>java.lang.String</code> | RSA Modulus. |

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktf/provider-okta.oauthApp.OauthAppJwks.property.kid"></a>

```java
public java.lang.String getKid();
```

- *Type:* java.lang.String

Key ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#kid OauthApp#kid}

---

##### `kty`<sup>Required</sup> <a name="kty" id="@cdktf/provider-okta.oauthApp.OauthAppJwks.property.kty"></a>

```java
public java.lang.String getKty();
```

- *Type:* java.lang.String

Key type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#kty OauthApp#kty}

---

##### `e`<sup>Optional</sup> <a name="e" id="@cdktf/provider-okta.oauthApp.OauthAppJwks.property.e"></a>

```java
public java.lang.String getE();
```

- *Type:* java.lang.String

RSA Exponent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#e OauthApp#e}

---

##### `n`<sup>Optional</sup> <a name="n" id="@cdktf/provider-okta.oauthApp.OauthAppJwks.property.n"></a>

```java
public java.lang.String getN();
```

- *Type:* java.lang.String

RSA Modulus.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#n OauthApp#n}

---

### OauthAppTimeouts <a name="OauthAppTimeouts" id="@cdktf/provider-okta.oauthApp.OauthAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.oauthApp.OauthAppTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.oauth_app.OauthAppTimeouts;

OauthAppTimeouts.builder()
//  .create(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#create OauthApp#create}. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#read OauthApp#read}. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#update OauthApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.oauthApp.OauthAppTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#create OauthApp#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.oauthApp.OauthAppTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#read OauthApp#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.oauthApp.OauthAppTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#update OauthApp#update}.

---

### OauthAppUsers <a name="OauthAppUsers" id="@cdktf/provider-okta.oauthApp.OauthAppUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.oauthApp.OauthAppUsers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.oauth_app.OauthAppUsers;

OauthAppUsers.builder()
//  .id(java.lang.String)
//  .password(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers.property.id">id</a></code> | <code>java.lang.String</code> | User ID. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers.property.password">password</a></code> | <code>java.lang.String</code> | Password for user application. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers.property.username">username</a></code> | <code>java.lang.String</code> | Username for user. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.oauthApp.OauthAppUsers.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

User ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#id OauthApp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-okta.oauthApp.OauthAppUsers.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Password for user application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#password OauthApp#password}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-okta.oauthApp.OauthAppUsers.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Username for user.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/oauth_app#username OauthApp#username}

---

## Classes <a name="Classes" id="Classes"></a>

### OauthAppGroupsClaimOutputReference <a name="OauthAppGroupsClaimOutputReference" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.oauth_app.OauthAppGroupsClaimOutputReference;

new OauthAppGroupsClaimOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.resetFilterType">resetFilterType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilterType` <a name="resetFilterType" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.resetFilterType"></a>

```java
public void resetFilterType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.issuerMode">issuerMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.filterTypeInput">filterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.filterType">filterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `issuerMode`<sup>Required</sup> <a name="issuerMode" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.issuerMode"></a>

```java
public java.lang.String getIssuerMode();
```

- *Type:* java.lang.String

---

##### `filterTypeInput`<sup>Optional</sup> <a name="filterTypeInput" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.filterTypeInput"></a>

```java
public java.lang.String getFilterTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.oauthApp.OauthAppGroupsClaimOutputReference.property.internalValue"></a>

```java
public OauthAppGroupsClaim getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppGroupsClaim">OauthAppGroupsClaim</a>

---


### OauthAppJwksList <a name="OauthAppJwksList" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.oauth_app.OauthAppJwksList;

new OauthAppJwksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.get"></a>

```java
public OauthAppJwksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks">OauthAppJwks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.oauthApp.OauthAppJwksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks">OauthAppJwks</a>>

---


### OauthAppJwksOutputReference <a name="OauthAppJwksOutputReference" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.oauth_app.OauthAppJwksOutputReference;

new OauthAppJwksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resetE">resetE</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resetN">resetN</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetE` <a name="resetE" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resetE"></a>

```java
public void resetE()
```

##### `resetN` <a name="resetN" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.resetN"></a>

```java
public void resetN()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.eInput">eInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.kidInput">kidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.ktyInput">ktyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.nInput">nInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.e">e</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.kid">kid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.kty">kty</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.n">n</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks">OauthAppJwks</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eInput`<sup>Optional</sup> <a name="eInput" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.eInput"></a>

```java
public java.lang.String getEInput();
```

- *Type:* java.lang.String

---

##### `kidInput`<sup>Optional</sup> <a name="kidInput" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.kidInput"></a>

```java
public java.lang.String getKidInput();
```

- *Type:* java.lang.String

---

##### `ktyInput`<sup>Optional</sup> <a name="ktyInput" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.ktyInput"></a>

```java
public java.lang.String getKtyInput();
```

- *Type:* java.lang.String

---

##### `nInput`<sup>Optional</sup> <a name="nInput" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.nInput"></a>

```java
public java.lang.String getNInput();
```

- *Type:* java.lang.String

---

##### `e`<sup>Required</sup> <a name="e" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.e"></a>

```java
public java.lang.String getE();
```

- *Type:* java.lang.String

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.kid"></a>

```java
public java.lang.String getKid();
```

- *Type:* java.lang.String

---

##### `kty`<sup>Required</sup> <a name="kty" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.kty"></a>

```java
public java.lang.String getKty();
```

- *Type:* java.lang.String

---

##### `n`<sup>Required</sup> <a name="n" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.n"></a>

```java
public java.lang.String getN();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.oauthApp.OauthAppJwksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppJwks">OauthAppJwks</a> OR com.hashicorp.cdktf.IResolvable

---


### OauthAppTimeoutsOutputReference <a name="OauthAppTimeoutsOutputReference" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.oauth_app.OauthAppTimeoutsOutputReference;

new OauthAppTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts">OauthAppTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.oauthApp.OauthAppTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppTimeouts">OauthAppTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---


### OauthAppUsersList <a name="OauthAppUsersList" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.oauth_app.OauthAppUsersList;

new OauthAppUsersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.get"></a>

```java
public OauthAppUsersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers">OauthAppUsers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.oauthApp.OauthAppUsersList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers">OauthAppUsers</a>>

---


### OauthAppUsersOutputReference <a name="OauthAppUsersOutputReference" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.oauth_app.OauthAppUsersOutputReference;

new OauthAppUsersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers">OauthAppUsers</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.oauthApp.OauthAppUsersOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-okta.oauthApp.OauthAppUsers">OauthAppUsers</a> OR com.hashicorp.cdktf.IResolvable

---



