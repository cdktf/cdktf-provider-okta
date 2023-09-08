# `okta_app_oauth`

Refer to the Terraform Registory for docs: [`okta_app_oauth`](https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth).

# `appOauth` Submodule <a name="`appOauth` Submodule" id="@cdktf/provider-okta.appOauth"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppOauth <a name="AppOauth" id="@cdktf/provider-okta.appOauth.AppOauth"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth okta_app_oauth}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_oauth.AppOauth;

AppOauth.Builder.create(Construct scope, java.lang.String id)
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
//  .enduserNote(java.lang.String)
//  .grantTypes(java.util.List<java.lang.String>)
//  .groupsClaim(AppOauthGroupsClaim)
//  .hideIos(java.lang.Boolean)
//  .hideIos(IResolvable)
//  .hideWeb(java.lang.Boolean)
//  .hideWeb(IResolvable)
//  .id(java.lang.String)
//  .implicitAssignment(java.lang.Boolean)
//  .implicitAssignment(IResolvable)
//  .issuerMode(java.lang.String)
//  .jwks(IResolvable)
//  .jwks(java.util.List<AppOauthJwks>)
//  .jwksUri(java.lang.String)
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
//  .status(java.lang.String)
//  .timeouts(AppOauthTimeouts)
//  .tokenEndpointAuthMethod(java.lang.String)
//  .tosUri(java.lang.String)
//  .userNameTemplate(java.lang.String)
//  .userNameTemplatePushStatus(java.lang.String)
//  .userNameTemplateSuffix(java.lang.String)
//  .userNameTemplateType(java.lang.String)
//  .wildcardRedirect(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.label">label</a></code> | <code>java.lang.String</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of client application. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>java.lang.String</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>java.lang.String</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.accessibilitySelfService">accessibilitySelfService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.adminNote">adminNote</a></code> | <code>java.lang.String</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.appLinksJson">appLinksJson</a></code> | <code>java.lang.String</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.appSettingsJson">appSettingsJson</a></code> | <code>java.lang.String</code> | Application settings in JSON format. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.authenticationPolicy">authenticationPolicy</a></code> | <code>java.lang.String</code> | Id of this apps authentication policy. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.autoKeyRotation">autoKeyRotation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Requested key rotation mode. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.clientBasicSecret">clientBasicSecret</a></code> | <code>java.lang.String</code> | OAuth client secret key, this can be set when token_endpoint_auth_method is client_secret_basic. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.clientId">clientId</a></code> | <code>java.lang.String</code> | OAuth client ID. If set during creation, app is created with this id. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.clientUri">clientUri</a></code> | <code>java.lang.String</code> | URI to a web page providing information about the client. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.consentMethod">consentMethod</a></code> | <code>java.lang.String</code> | *Early Access Property*. Indicates whether user consent is required or implicit. Valid values: REQUIRED, TRUSTED. Default value is TRUSTED. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.enduserNote">enduserNote</a></code> | <code>java.lang.String</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.grantTypes">grantTypes</a></code> | <code>java.util.List<java.lang.String></code> | List of OAuth 2.0 grant types. Conditional validation params found here https://developer.okta.com/docs/api/resources/apps#credentials-settings-details. Defaults to minimum requirements per app type. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.groupsClaim">groupsClaim</a></code> | <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim">AppOauthGroupsClaim</a></code> | groups_claim block. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.hideIos">hideIos</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.hideWeb">hideWeb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#id AppOauth#id}. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.implicitAssignment">implicitAssignment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *Early Access Property*. Enable Federation Broker Mode. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.issuerMode">issuerMode</a></code> | <code>java.lang.String</code> | *Early Access Property*. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.jwks">jwks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appOauth.AppOauthJwks">AppOauthJwks</a>></code> | jwks block. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.jwksUri">jwksUri</a></code> | <code>java.lang.String</code> | URL reference to JWKS. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.loginMode">loginMode</a></code> | <code>java.lang.String</code> | The type of Idp-Initiated login that the client supports, if any. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.loginScopes">loginScopes</a></code> | <code>java.util.List<java.lang.String></code> | List of scopes to use for the request. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.loginUri">loginUri</a></code> | <code>java.lang.String</code> | URI that initiates login. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.logo">logo</a></code> | <code>java.lang.String</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.logoUri">logoUri</a></code> | <code>java.lang.String</code> | URI that references a logo for the client. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.omitSecret">omitSecret</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This tells the provider not to persist the application's secret to state. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.pkceRequired">pkceRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Require Proof Key for Code Exchange (PKCE) for additional verification key rotation mode. See: https://developer.okta.com/docs/reference/api/apps/#oauth-credential-object. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.policyUri">policyUri</a></code> | <code>java.lang.String</code> | URI to web page providing client policy document. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.postLogoutRedirectUris">postLogoutRedirectUris</a></code> | <code>java.util.List<java.lang.String></code> | List of URIs for redirection after logout. Note: see okta_app_oauth_post_logout_redirect_uri for appending to this list in a decentralized way. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.profile">profile</a></code> | <code>java.lang.String</code> | Custom JSON that represents an OAuth application's profile. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.redirectUris">redirectUris</a></code> | <code>java.util.List<java.lang.String></code> | List of URIs for use in the redirect-based flow. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.refreshTokenLeeway">refreshTokenLeeway</a></code> | <code>java.lang.Number</code> | *Early Access Property* Grace period for token rotation. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.refreshTokenRotation">refreshTokenRotation</a></code> | <code>java.lang.String</code> | *Early Access Property* Refresh token rotation behavior. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.responseTypes">responseTypes</a></code> | <code>java.util.List<java.lang.String></code> | List of OAuth 2.0 response type strings. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeouts">AppOauthTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.tokenEndpointAuthMethod">tokenEndpointAuthMethod</a></code> | <code>java.lang.String</code> | Requested authentication method for the token endpoint. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.tosUri">tosUri</a></code> | <code>java.lang.String</code> | URI to web page providing client tos (terms of service). |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.userNameTemplate">userNameTemplate</a></code> | <code>java.lang.String</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>java.lang.String</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>java.lang.String</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.userNameTemplateType">userNameTemplateType</a></code> | <code>java.lang.String</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.wildcardRedirect">wildcardRedirect</a></code> | <code>java.lang.String</code> | *Early Access Property*. Indicates if the client is allowed to use wildcard matching of redirect_uris. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.label"></a>

- *Type:* java.lang.String

Pretty name of app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#label AppOauth#label}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of client application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#type AppOauth#type}

---

##### `accessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.accessibilityErrorRedirectUrl"></a>

- *Type:* java.lang.String

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#accessibility_error_redirect_url AppOauth#accessibility_error_redirect_url}

---

##### `accessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.accessibilityLoginRedirectUrl"></a>

- *Type:* java.lang.String

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#accessibility_login_redirect_url AppOauth#accessibility_login_redirect_url}

---

##### `accessibilitySelfService`<sup>Optional</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.accessibilitySelfService"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable self service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#accessibility_self_service AppOauth#accessibility_self_service}

---

##### `adminNote`<sup>Optional</sup> <a name="adminNote" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.adminNote"></a>

- *Type:* java.lang.String

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#admin_note AppOauth#admin_note}

---

##### `appLinksJson`<sup>Optional</sup> <a name="appLinksJson" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.appLinksJson"></a>

- *Type:* java.lang.String

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#app_links_json AppOauth#app_links_json}

---

##### `appSettingsJson`<sup>Optional</sup> <a name="appSettingsJson" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.appSettingsJson"></a>

- *Type:* java.lang.String

Application settings in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#app_settings_json AppOauth#app_settings_json}

---

##### `authenticationPolicy`<sup>Optional</sup> <a name="authenticationPolicy" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.authenticationPolicy"></a>

- *Type:* java.lang.String

Id of this apps authentication policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#authentication_policy AppOauth#authentication_policy}

---

##### `autoKeyRotation`<sup>Optional</sup> <a name="autoKeyRotation" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.autoKeyRotation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Requested key rotation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#auto_key_rotation AppOauth#auto_key_rotation}

---

##### `autoSubmitToolbar`<sup>Optional</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.autoSubmitToolbar"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#auto_submit_toolbar AppOauth#auto_submit_toolbar}

---

##### `clientBasicSecret`<sup>Optional</sup> <a name="clientBasicSecret" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.clientBasicSecret"></a>

- *Type:* java.lang.String

OAuth client secret key, this can be set when token_endpoint_auth_method is client_secret_basic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#client_basic_secret AppOauth#client_basic_secret}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.clientId"></a>

- *Type:* java.lang.String

OAuth client ID. If set during creation, app is created with this id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#client_id AppOauth#client_id}

---

##### `clientUri`<sup>Optional</sup> <a name="clientUri" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.clientUri"></a>

- *Type:* java.lang.String

URI to a web page providing information about the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#client_uri AppOauth#client_uri}

---

##### `consentMethod`<sup>Optional</sup> <a name="consentMethod" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.consentMethod"></a>

- *Type:* java.lang.String

*Early Access Property*. Indicates whether user consent is required or implicit. Valid values: REQUIRED, TRUSTED. Default value is TRUSTED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#consent_method AppOauth#consent_method}

---

##### `enduserNote`<sup>Optional</sup> <a name="enduserNote" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.enduserNote"></a>

- *Type:* java.lang.String

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#enduser_note AppOauth#enduser_note}

---

##### `grantTypes`<sup>Optional</sup> <a name="grantTypes" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.grantTypes"></a>

- *Type:* java.util.List<java.lang.String>

List of OAuth 2.0 grant types. Conditional validation params found here https://developer.okta.com/docs/api/resources/apps#credentials-settings-details. Defaults to minimum requirements per app type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#grant_types AppOauth#grant_types}

---

##### `groupsClaim`<sup>Optional</sup> <a name="groupsClaim" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.groupsClaim"></a>

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim">AppOauthGroupsClaim</a>

groups_claim block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#groups_claim AppOauth#groups_claim}

---

##### `hideIos`<sup>Optional</sup> <a name="hideIos" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.hideIos"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#hide_ios AppOauth#hide_ios}

---

##### `hideWeb`<sup>Optional</sup> <a name="hideWeb" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.hideWeb"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#hide_web AppOauth#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#id AppOauth#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `implicitAssignment`<sup>Optional</sup> <a name="implicitAssignment" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.implicitAssignment"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

*Early Access Property*. Enable Federation Broker Mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#implicit_assignment AppOauth#implicit_assignment}

---

##### `issuerMode`<sup>Optional</sup> <a name="issuerMode" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.issuerMode"></a>

- *Type:* java.lang.String

*Early Access Property*.

Indicates whether the Okta Authorization Server uses the original Okta org domain URL or a custom domain URL as the issuer of ID token for this client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#issuer_mode AppOauth#issuer_mode}

---

##### `jwks`<sup>Optional</sup> <a name="jwks" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.jwks"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appOauth.AppOauthJwks">AppOauthJwks</a>>

jwks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#jwks AppOauth#jwks}

---

##### `jwksUri`<sup>Optional</sup> <a name="jwksUri" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.jwksUri"></a>

- *Type:* java.lang.String

URL reference to JWKS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#jwks_uri AppOauth#jwks_uri}

---

##### `loginMode`<sup>Optional</sup> <a name="loginMode" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.loginMode"></a>

- *Type:* java.lang.String

The type of Idp-Initiated login that the client supports, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#login_mode AppOauth#login_mode}

---

##### `loginScopes`<sup>Optional</sup> <a name="loginScopes" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.loginScopes"></a>

- *Type:* java.util.List<java.lang.String>

List of scopes to use for the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#login_scopes AppOauth#login_scopes}

---

##### `loginUri`<sup>Optional</sup> <a name="loginUri" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.loginUri"></a>

- *Type:* java.lang.String

URI that initiates login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#login_uri AppOauth#login_uri}

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.logo"></a>

- *Type:* java.lang.String

Local path to logo of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#logo AppOauth#logo}

---

##### `logoUri`<sup>Optional</sup> <a name="logoUri" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.logoUri"></a>

- *Type:* java.lang.String

URI that references a logo for the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#logo_uri AppOauth#logo_uri}

---

##### `omitSecret`<sup>Optional</sup> <a name="omitSecret" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.omitSecret"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This tells the provider not to persist the application's secret to state.

If this is ever changes from true => false your app will be recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#omit_secret AppOauth#omit_secret}

---

##### `pkceRequired`<sup>Optional</sup> <a name="pkceRequired" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.pkceRequired"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Require Proof Key for Code Exchange (PKCE) for additional verification key rotation mode. See: https://developer.okta.com/docs/reference/api/apps/#oauth-credential-object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#pkce_required AppOauth#pkce_required}

---

##### `policyUri`<sup>Optional</sup> <a name="policyUri" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.policyUri"></a>

- *Type:* java.lang.String

URI to web page providing client policy document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#policy_uri AppOauth#policy_uri}

---

##### `postLogoutRedirectUris`<sup>Optional</sup> <a name="postLogoutRedirectUris" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.postLogoutRedirectUris"></a>

- *Type:* java.util.List<java.lang.String>

List of URIs for redirection after logout. Note: see okta_app_oauth_post_logout_redirect_uri for appending to this list in a decentralized way.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#post_logout_redirect_uris AppOauth#post_logout_redirect_uris}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.profile"></a>

- *Type:* java.lang.String

Custom JSON that represents an OAuth application's profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#profile AppOauth#profile}

---

##### `redirectUris`<sup>Optional</sup> <a name="redirectUris" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.redirectUris"></a>

- *Type:* java.util.List<java.lang.String>

List of URIs for use in the redirect-based flow.

This is required for all application types except service. Note: see okta_app_oauth_redirect_uri for appending to this list in a decentralized way.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#redirect_uris AppOauth#redirect_uris}

---

##### `refreshTokenLeeway`<sup>Optional</sup> <a name="refreshTokenLeeway" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.refreshTokenLeeway"></a>

- *Type:* java.lang.Number

*Early Access Property* Grace period for token rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#refresh_token_leeway AppOauth#refresh_token_leeway}

---

##### `refreshTokenRotation`<sup>Optional</sup> <a name="refreshTokenRotation" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.refreshTokenRotation"></a>

- *Type:* java.lang.String

*Early Access Property* Refresh token rotation behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#refresh_token_rotation AppOauth#refresh_token_rotation}

---

##### `responseTypes`<sup>Optional</sup> <a name="responseTypes" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.responseTypes"></a>

- *Type:* java.util.List<java.lang.String>

List of OAuth 2.0 response type strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#response_types AppOauth#response_types}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Status of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#status AppOauth#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthTimeouts">AppOauthTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#timeouts AppOauth#timeouts}

---

##### `tokenEndpointAuthMethod`<sup>Optional</sup> <a name="tokenEndpointAuthMethod" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.tokenEndpointAuthMethod"></a>

- *Type:* java.lang.String

Requested authentication method for the token endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#token_endpoint_auth_method AppOauth#token_endpoint_auth_method}

---

##### `tosUri`<sup>Optional</sup> <a name="tosUri" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.tosUri"></a>

- *Type:* java.lang.String

URI to web page providing client tos (terms of service).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#tos_uri AppOauth#tos_uri}

---

##### `userNameTemplate`<sup>Optional</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.userNameTemplate"></a>

- *Type:* java.lang.String

Username template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#user_name_template AppOauth#user_name_template}

---

##### `userNameTemplatePushStatus`<sup>Optional</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.userNameTemplatePushStatus"></a>

- *Type:* java.lang.String

Push username on update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#user_name_template_push_status AppOauth#user_name_template_push_status}

---

##### `userNameTemplateSuffix`<sup>Optional</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.userNameTemplateSuffix"></a>

- *Type:* java.lang.String

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#user_name_template_suffix AppOauth#user_name_template_suffix}

---

##### `userNameTemplateType`<sup>Optional</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.userNameTemplateType"></a>

- *Type:* java.lang.String

Username template type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#user_name_template_type AppOauth#user_name_template_type}

---

##### `wildcardRedirect`<sup>Optional</sup> <a name="wildcardRedirect" id="@cdktf/provider-okta.appOauth.AppOauth.Initializer.parameter.wildcardRedirect"></a>

- *Type:* java.lang.String

*Early Access Property*. Indicates if the client is allowed to use wildcard matching of redirect_uris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#wildcard_redirect AppOauth#wildcard_redirect}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.putGroupsClaim">putGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.putJwks">putJwks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAccessibilityErrorRedirectUrl">resetAccessibilityErrorRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAccessibilityLoginRedirectUrl">resetAccessibilityLoginRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAccessibilitySelfService">resetAccessibilitySelfService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAdminNote">resetAdminNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAppLinksJson">resetAppLinksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAppSettingsJson">resetAppSettingsJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAuthenticationPolicy">resetAuthenticationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAutoKeyRotation">resetAutoKeyRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetAutoSubmitToolbar">resetAutoSubmitToolbar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetClientBasicSecret">resetClientBasicSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetClientUri">resetClientUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetConsentMethod">resetConsentMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetEnduserNote">resetEnduserNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetGrantTypes">resetGrantTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetGroupsClaim">resetGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetHideIos">resetHideIos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetHideWeb">resetHideWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetImplicitAssignment">resetImplicitAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetIssuerMode">resetIssuerMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetJwks">resetJwks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetJwksUri">resetJwksUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetLoginMode">resetLoginMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetLoginScopes">resetLoginScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetLoginUri">resetLoginUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetLogo">resetLogo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetLogoUri">resetLogoUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetOmitSecret">resetOmitSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetPkceRequired">resetPkceRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetPolicyUri">resetPolicyUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetPostLogoutRedirectUris">resetPostLogoutRedirectUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetProfile">resetProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetRedirectUris">resetRedirectUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetRefreshTokenLeeway">resetRefreshTokenLeeway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetRefreshTokenRotation">resetRefreshTokenRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetResponseTypes">resetResponseTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetTokenEndpointAuthMethod">resetTokenEndpointAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetTosUri">resetTosUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetUserNameTemplate">resetUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetUserNameTemplatePushStatus">resetUserNameTemplatePushStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetUserNameTemplateSuffix">resetUserNameTemplateSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetUserNameTemplateType">resetUserNameTemplateType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.resetWildcardRedirect">resetWildcardRedirect</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appOauth.AppOauth.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.appOauth.AppOauth.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appOauth.AppOauth.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appOauth.AppOauth.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.appOauth.AppOauth.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.appOauth.AppOauth.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.appOauth.AppOauth.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.appOauth.AppOauth.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.appOauth.AppOauth.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauth.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putGroupsClaim` <a name="putGroupsClaim" id="@cdktf/provider-okta.appOauth.AppOauth.putGroupsClaim"></a>

```java
public void putGroupsClaim(AppOauthGroupsClaim value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appOauth.AppOauth.putGroupsClaim.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim">AppOauthGroupsClaim</a>

---

##### `putJwks` <a name="putJwks" id="@cdktf/provider-okta.appOauth.AppOauth.putJwks"></a>

```java
public void putJwks(IResolvable OR java.util.List<AppOauthJwks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appOauth.AppOauth.putJwks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appOauth.AppOauthJwks">AppOauthJwks</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-okta.appOauth.AppOauth.putTimeouts"></a>

```java
public void putTimeouts(AppOauthTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appOauth.AppOauth.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthTimeouts">AppOauthTimeouts</a>

---

##### `resetAccessibilityErrorRedirectUrl` <a name="resetAccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appOauth.AppOauth.resetAccessibilityErrorRedirectUrl"></a>

```java
public void resetAccessibilityErrorRedirectUrl()
```

##### `resetAccessibilityLoginRedirectUrl` <a name="resetAccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appOauth.AppOauth.resetAccessibilityLoginRedirectUrl"></a>

```java
public void resetAccessibilityLoginRedirectUrl()
```

##### `resetAccessibilitySelfService` <a name="resetAccessibilitySelfService" id="@cdktf/provider-okta.appOauth.AppOauth.resetAccessibilitySelfService"></a>

```java
public void resetAccessibilitySelfService()
```

##### `resetAdminNote` <a name="resetAdminNote" id="@cdktf/provider-okta.appOauth.AppOauth.resetAdminNote"></a>

```java
public void resetAdminNote()
```

##### `resetAppLinksJson` <a name="resetAppLinksJson" id="@cdktf/provider-okta.appOauth.AppOauth.resetAppLinksJson"></a>

```java
public void resetAppLinksJson()
```

##### `resetAppSettingsJson` <a name="resetAppSettingsJson" id="@cdktf/provider-okta.appOauth.AppOauth.resetAppSettingsJson"></a>

```java
public void resetAppSettingsJson()
```

##### `resetAuthenticationPolicy` <a name="resetAuthenticationPolicy" id="@cdktf/provider-okta.appOauth.AppOauth.resetAuthenticationPolicy"></a>

```java
public void resetAuthenticationPolicy()
```

##### `resetAutoKeyRotation` <a name="resetAutoKeyRotation" id="@cdktf/provider-okta.appOauth.AppOauth.resetAutoKeyRotation"></a>

```java
public void resetAutoKeyRotation()
```

##### `resetAutoSubmitToolbar` <a name="resetAutoSubmitToolbar" id="@cdktf/provider-okta.appOauth.AppOauth.resetAutoSubmitToolbar"></a>

```java
public void resetAutoSubmitToolbar()
```

##### `resetClientBasicSecret` <a name="resetClientBasicSecret" id="@cdktf/provider-okta.appOauth.AppOauth.resetClientBasicSecret"></a>

```java
public void resetClientBasicSecret()
```

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-okta.appOauth.AppOauth.resetClientId"></a>

```java
public void resetClientId()
```

##### `resetClientUri` <a name="resetClientUri" id="@cdktf/provider-okta.appOauth.AppOauth.resetClientUri"></a>

```java
public void resetClientUri()
```

##### `resetConsentMethod` <a name="resetConsentMethod" id="@cdktf/provider-okta.appOauth.AppOauth.resetConsentMethod"></a>

```java
public void resetConsentMethod()
```

##### `resetEnduserNote` <a name="resetEnduserNote" id="@cdktf/provider-okta.appOauth.AppOauth.resetEnduserNote"></a>

```java
public void resetEnduserNote()
```

##### `resetGrantTypes` <a name="resetGrantTypes" id="@cdktf/provider-okta.appOauth.AppOauth.resetGrantTypes"></a>

```java
public void resetGrantTypes()
```

##### `resetGroupsClaim` <a name="resetGroupsClaim" id="@cdktf/provider-okta.appOauth.AppOauth.resetGroupsClaim"></a>

```java
public void resetGroupsClaim()
```

##### `resetHideIos` <a name="resetHideIos" id="@cdktf/provider-okta.appOauth.AppOauth.resetHideIos"></a>

```java
public void resetHideIos()
```

##### `resetHideWeb` <a name="resetHideWeb" id="@cdktf/provider-okta.appOauth.AppOauth.resetHideWeb"></a>

```java
public void resetHideWeb()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.appOauth.AppOauth.resetId"></a>

```java
public void resetId()
```

##### `resetImplicitAssignment` <a name="resetImplicitAssignment" id="@cdktf/provider-okta.appOauth.AppOauth.resetImplicitAssignment"></a>

```java
public void resetImplicitAssignment()
```

##### `resetIssuerMode` <a name="resetIssuerMode" id="@cdktf/provider-okta.appOauth.AppOauth.resetIssuerMode"></a>

```java
public void resetIssuerMode()
```

##### `resetJwks` <a name="resetJwks" id="@cdktf/provider-okta.appOauth.AppOauth.resetJwks"></a>

```java
public void resetJwks()
```

##### `resetJwksUri` <a name="resetJwksUri" id="@cdktf/provider-okta.appOauth.AppOauth.resetJwksUri"></a>

```java
public void resetJwksUri()
```

##### `resetLoginMode` <a name="resetLoginMode" id="@cdktf/provider-okta.appOauth.AppOauth.resetLoginMode"></a>

```java
public void resetLoginMode()
```

##### `resetLoginScopes` <a name="resetLoginScopes" id="@cdktf/provider-okta.appOauth.AppOauth.resetLoginScopes"></a>

```java
public void resetLoginScopes()
```

##### `resetLoginUri` <a name="resetLoginUri" id="@cdktf/provider-okta.appOauth.AppOauth.resetLoginUri"></a>

```java
public void resetLoginUri()
```

##### `resetLogo` <a name="resetLogo" id="@cdktf/provider-okta.appOauth.AppOauth.resetLogo"></a>

```java
public void resetLogo()
```

##### `resetLogoUri` <a name="resetLogoUri" id="@cdktf/provider-okta.appOauth.AppOauth.resetLogoUri"></a>

```java
public void resetLogoUri()
```

##### `resetOmitSecret` <a name="resetOmitSecret" id="@cdktf/provider-okta.appOauth.AppOauth.resetOmitSecret"></a>

```java
public void resetOmitSecret()
```

##### `resetPkceRequired` <a name="resetPkceRequired" id="@cdktf/provider-okta.appOauth.AppOauth.resetPkceRequired"></a>

```java
public void resetPkceRequired()
```

##### `resetPolicyUri` <a name="resetPolicyUri" id="@cdktf/provider-okta.appOauth.AppOauth.resetPolicyUri"></a>

```java
public void resetPolicyUri()
```

##### `resetPostLogoutRedirectUris` <a name="resetPostLogoutRedirectUris" id="@cdktf/provider-okta.appOauth.AppOauth.resetPostLogoutRedirectUris"></a>

```java
public void resetPostLogoutRedirectUris()
```

##### `resetProfile` <a name="resetProfile" id="@cdktf/provider-okta.appOauth.AppOauth.resetProfile"></a>

```java
public void resetProfile()
```

##### `resetRedirectUris` <a name="resetRedirectUris" id="@cdktf/provider-okta.appOauth.AppOauth.resetRedirectUris"></a>

```java
public void resetRedirectUris()
```

##### `resetRefreshTokenLeeway` <a name="resetRefreshTokenLeeway" id="@cdktf/provider-okta.appOauth.AppOauth.resetRefreshTokenLeeway"></a>

```java
public void resetRefreshTokenLeeway()
```

##### `resetRefreshTokenRotation` <a name="resetRefreshTokenRotation" id="@cdktf/provider-okta.appOauth.AppOauth.resetRefreshTokenRotation"></a>

```java
public void resetRefreshTokenRotation()
```

##### `resetResponseTypes` <a name="resetResponseTypes" id="@cdktf/provider-okta.appOauth.AppOauth.resetResponseTypes"></a>

```java
public void resetResponseTypes()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.appOauth.AppOauth.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-okta.appOauth.AppOauth.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTokenEndpointAuthMethod` <a name="resetTokenEndpointAuthMethod" id="@cdktf/provider-okta.appOauth.AppOauth.resetTokenEndpointAuthMethod"></a>

```java
public void resetTokenEndpointAuthMethod()
```

##### `resetTosUri` <a name="resetTosUri" id="@cdktf/provider-okta.appOauth.AppOauth.resetTosUri"></a>

```java
public void resetTosUri()
```

##### `resetUserNameTemplate` <a name="resetUserNameTemplate" id="@cdktf/provider-okta.appOauth.AppOauth.resetUserNameTemplate"></a>

```java
public void resetUserNameTemplate()
```

##### `resetUserNameTemplatePushStatus` <a name="resetUserNameTemplatePushStatus" id="@cdktf/provider-okta.appOauth.AppOauth.resetUserNameTemplatePushStatus"></a>

```java
public void resetUserNameTemplatePushStatus()
```

##### `resetUserNameTemplateSuffix` <a name="resetUserNameTemplateSuffix" id="@cdktf/provider-okta.appOauth.AppOauth.resetUserNameTemplateSuffix"></a>

```java
public void resetUserNameTemplateSuffix()
```

##### `resetUserNameTemplateType` <a name="resetUserNameTemplateType" id="@cdktf/provider-okta.appOauth.AppOauth.resetUserNameTemplateType"></a>

```java
public void resetUserNameTemplateType()
```

##### `resetWildcardRedirect` <a name="resetWildcardRedirect" id="@cdktf/provider-okta.appOauth.AppOauth.resetWildcardRedirect"></a>

```java
public void resetWildcardRedirect()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.appOauth.AppOauth.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_oauth.AppOauth;

AppOauth.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appOauth.AppOauth.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.appOauth.AppOauth.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_oauth.AppOauth;

AppOauth.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appOauth.AppOauth.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.appOauth.AppOauth.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_oauth.AppOauth;

AppOauth.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appOauth.AppOauth.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.groupsClaim">groupsClaim</a></code> | <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference">AppOauthGroupsClaimOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.jwks">jwks</a></code> | <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList">AppOauthJwksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.logoUrl">logoUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.signOnMode">signOnMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference">AppOauthTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.accessibilityErrorRedirectUrlInput">accessibilityErrorRedirectUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.accessibilityLoginRedirectUrlInput">accessibilityLoginRedirectUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.accessibilitySelfServiceInput">accessibilitySelfServiceInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.adminNoteInput">adminNoteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.appLinksJsonInput">appLinksJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.appSettingsJsonInput">appSettingsJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.authenticationPolicyInput">authenticationPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.autoKeyRotationInput">autoKeyRotationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.autoSubmitToolbarInput">autoSubmitToolbarInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.clientBasicSecretInput">clientBasicSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.clientUriInput">clientUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.consentMethodInput">consentMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.enduserNoteInput">enduserNoteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.grantTypesInput">grantTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.groupsClaimInput">groupsClaimInput</a></code> | <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim">AppOauthGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.hideIosInput">hideIosInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.hideWebInput">hideWebInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.implicitAssignmentInput">implicitAssignmentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.issuerModeInput">issuerModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.jwksInput">jwksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appOauth.AppOauthJwks">AppOauthJwks</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.jwksUriInput">jwksUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.loginModeInput">loginModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.loginScopesInput">loginScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.loginUriInput">loginUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.logoInput">logoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.logoUriInput">logoUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.omitSecretInput">omitSecretInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.pkceRequiredInput">pkceRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.policyUriInput">policyUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.postLogoutRedirectUrisInput">postLogoutRedirectUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.profileInput">profileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.redirectUrisInput">redirectUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.refreshTokenLeewayInput">refreshTokenLeewayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.refreshTokenRotationInput">refreshTokenRotationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.responseTypesInput">responseTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.appOauth.AppOauthTimeouts">AppOauthTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.tokenEndpointAuthMethodInput">tokenEndpointAuthMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.tosUriInput">tosUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateInput">userNameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplatePushStatusInput">userNameTemplatePushStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateSuffixInput">userNameTemplateSuffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateTypeInput">userNameTemplateTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.wildcardRedirectInput">wildcardRedirectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.adminNote">adminNote</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.appLinksJson">appLinksJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.appSettingsJson">appSettingsJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.authenticationPolicy">authenticationPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.autoKeyRotation">autoKeyRotation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.clientBasicSecret">clientBasicSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.clientUri">clientUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.consentMethod">consentMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.enduserNote">enduserNote</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.grantTypes">grantTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.hideIos">hideIos</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.hideWeb">hideWeb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.implicitAssignment">implicitAssignment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.issuerMode">issuerMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.jwksUri">jwksUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.loginMode">loginMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.loginScopes">loginScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.loginUri">loginUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.logo">logo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.logoUri">logoUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.omitSecret">omitSecret</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.pkceRequired">pkceRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.policyUri">policyUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.postLogoutRedirectUris">postLogoutRedirectUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.profile">profile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.redirectUris">redirectUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.refreshTokenLeeway">refreshTokenLeeway</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.refreshTokenRotation">refreshTokenRotation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.responseTypes">responseTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.tokenEndpointAuthMethod">tokenEndpointAuthMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.tosUri">tosUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplate">userNameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateType">userNameTemplateType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.wildcardRedirect">wildcardRedirect</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.appOauth.AppOauth.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.appOauth.AppOauth.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appOauth.AppOauth.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.appOauth.AppOauth.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.appOauth.AppOauth.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.appOauth.AppOauth.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.appOauth.AppOauth.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appOauth.AppOauth.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appOauth.AppOauth.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appOauth.AppOauth.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appOauth.AppOauth.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appOauth.AppOauth.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appOauth.AppOauth.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appOauth.AppOauth.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-okta.appOauth.AppOauth.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `groupsClaim`<sup>Required</sup> <a name="groupsClaim" id="@cdktf/provider-okta.appOauth.AppOauth.property.groupsClaim"></a>

```java
public AppOauthGroupsClaimOutputReference getGroupsClaim();
```

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference">AppOauthGroupsClaimOutputReference</a>

---

##### `jwks`<sup>Required</sup> <a name="jwks" id="@cdktf/provider-okta.appOauth.AppOauth.property.jwks"></a>

```java
public AppOauthJwksList getJwks();
```

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList">AppOauthJwksList</a>

---

##### `logoUrl`<sup>Required</sup> <a name="logoUrl" id="@cdktf/provider-okta.appOauth.AppOauth.property.logoUrl"></a>

```java
public java.lang.String getLogoUrl();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.appOauth.AppOauth.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `signOnMode`<sup>Required</sup> <a name="signOnMode" id="@cdktf/provider-okta.appOauth.AppOauth.property.signOnMode"></a>

```java
public java.lang.String getSignOnMode();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-okta.appOauth.AppOauth.property.timeouts"></a>

```java
public AppOauthTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference">AppOauthTimeoutsOutputReference</a>

---

##### `accessibilityErrorRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrlInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.accessibilityErrorRedirectUrlInput"></a>

```java
public java.lang.String getAccessibilityErrorRedirectUrlInput();
```

- *Type:* java.lang.String

---

##### `accessibilityLoginRedirectUrlInput`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrlInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.accessibilityLoginRedirectUrlInput"></a>

```java
public java.lang.String getAccessibilityLoginRedirectUrlInput();
```

- *Type:* java.lang.String

---

##### `accessibilitySelfServiceInput`<sup>Optional</sup> <a name="accessibilitySelfServiceInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.accessibilitySelfServiceInput"></a>

```java
public java.lang.Object getAccessibilitySelfServiceInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `adminNoteInput`<sup>Optional</sup> <a name="adminNoteInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.adminNoteInput"></a>

```java
public java.lang.String getAdminNoteInput();
```

- *Type:* java.lang.String

---

##### `appLinksJsonInput`<sup>Optional</sup> <a name="appLinksJsonInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.appLinksJsonInput"></a>

```java
public java.lang.String getAppLinksJsonInput();
```

- *Type:* java.lang.String

---

##### `appSettingsJsonInput`<sup>Optional</sup> <a name="appSettingsJsonInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.appSettingsJsonInput"></a>

```java
public java.lang.String getAppSettingsJsonInput();
```

- *Type:* java.lang.String

---

##### `authenticationPolicyInput`<sup>Optional</sup> <a name="authenticationPolicyInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.authenticationPolicyInput"></a>

```java
public java.lang.String getAuthenticationPolicyInput();
```

- *Type:* java.lang.String

---

##### `autoKeyRotationInput`<sup>Optional</sup> <a name="autoKeyRotationInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.autoKeyRotationInput"></a>

```java
public java.lang.Object getAutoKeyRotationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoSubmitToolbarInput`<sup>Optional</sup> <a name="autoSubmitToolbarInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.autoSubmitToolbarInput"></a>

```java
public java.lang.Object getAutoSubmitToolbarInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientBasicSecretInput`<sup>Optional</sup> <a name="clientBasicSecretInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.clientBasicSecretInput"></a>

```java
public java.lang.String getClientBasicSecretInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientUriInput`<sup>Optional</sup> <a name="clientUriInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.clientUriInput"></a>

```java
public java.lang.String getClientUriInput();
```

- *Type:* java.lang.String

---

##### `consentMethodInput`<sup>Optional</sup> <a name="consentMethodInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.consentMethodInput"></a>

```java
public java.lang.String getConsentMethodInput();
```

- *Type:* java.lang.String

---

##### `enduserNoteInput`<sup>Optional</sup> <a name="enduserNoteInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.enduserNoteInput"></a>

```java
public java.lang.String getEnduserNoteInput();
```

- *Type:* java.lang.String

---

##### `grantTypesInput`<sup>Optional</sup> <a name="grantTypesInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.grantTypesInput"></a>

```java
public java.util.List<java.lang.String> getGrantTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupsClaimInput`<sup>Optional</sup> <a name="groupsClaimInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.groupsClaimInput"></a>

```java
public AppOauthGroupsClaim getGroupsClaimInput();
```

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim">AppOauthGroupsClaim</a>

---

##### `hideIosInput`<sup>Optional</sup> <a name="hideIosInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.hideIosInput"></a>

```java
public java.lang.Object getHideIosInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hideWebInput`<sup>Optional</sup> <a name="hideWebInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.hideWebInput"></a>

```java
public java.lang.Object getHideWebInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `implicitAssignmentInput`<sup>Optional</sup> <a name="implicitAssignmentInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.implicitAssignmentInput"></a>

```java
public java.lang.Object getImplicitAssignmentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `issuerModeInput`<sup>Optional</sup> <a name="issuerModeInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.issuerModeInput"></a>

```java
public java.lang.String getIssuerModeInput();
```

- *Type:* java.lang.String

---

##### `jwksInput`<sup>Optional</sup> <a name="jwksInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.jwksInput"></a>

```java
public java.lang.Object getJwksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appOauth.AppOauthJwks">AppOauthJwks</a>>

---

##### `jwksUriInput`<sup>Optional</sup> <a name="jwksUriInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.jwksUriInput"></a>

```java
public java.lang.String getJwksUriInput();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `loginModeInput`<sup>Optional</sup> <a name="loginModeInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.loginModeInput"></a>

```java
public java.lang.String getLoginModeInput();
```

- *Type:* java.lang.String

---

##### `loginScopesInput`<sup>Optional</sup> <a name="loginScopesInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.loginScopesInput"></a>

```java
public java.util.List<java.lang.String> getLoginScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loginUriInput`<sup>Optional</sup> <a name="loginUriInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.loginUriInput"></a>

```java
public java.lang.String getLoginUriInput();
```

- *Type:* java.lang.String

---

##### `logoInput`<sup>Optional</sup> <a name="logoInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.logoInput"></a>

```java
public java.lang.String getLogoInput();
```

- *Type:* java.lang.String

---

##### `logoUriInput`<sup>Optional</sup> <a name="logoUriInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.logoUriInput"></a>

```java
public java.lang.String getLogoUriInput();
```

- *Type:* java.lang.String

---

##### `omitSecretInput`<sup>Optional</sup> <a name="omitSecretInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.omitSecretInput"></a>

```java
public java.lang.Object getOmitSecretInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pkceRequiredInput`<sup>Optional</sup> <a name="pkceRequiredInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.pkceRequiredInput"></a>

```java
public java.lang.Object getPkceRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `policyUriInput`<sup>Optional</sup> <a name="policyUriInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.policyUriInput"></a>

```java
public java.lang.String getPolicyUriInput();
```

- *Type:* java.lang.String

---

##### `postLogoutRedirectUrisInput`<sup>Optional</sup> <a name="postLogoutRedirectUrisInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.postLogoutRedirectUrisInput"></a>

```java
public java.util.List<java.lang.String> getPostLogoutRedirectUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.profileInput"></a>

```java
public java.lang.String getProfileInput();
```

- *Type:* java.lang.String

---

##### `redirectUrisInput`<sup>Optional</sup> <a name="redirectUrisInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.redirectUrisInput"></a>

```java
public java.util.List<java.lang.String> getRedirectUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `refreshTokenLeewayInput`<sup>Optional</sup> <a name="refreshTokenLeewayInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.refreshTokenLeewayInput"></a>

```java
public java.lang.Number getRefreshTokenLeewayInput();
```

- *Type:* java.lang.Number

---

##### `refreshTokenRotationInput`<sup>Optional</sup> <a name="refreshTokenRotationInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.refreshTokenRotationInput"></a>

```java
public java.lang.String getRefreshTokenRotationInput();
```

- *Type:* java.lang.String

---

##### `responseTypesInput`<sup>Optional</sup> <a name="responseTypesInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.responseTypesInput"></a>

```java
public java.util.List<java.lang.String> getResponseTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.appOauth.AppOauthTimeouts">AppOauthTimeouts</a>

---

##### `tokenEndpointAuthMethodInput`<sup>Optional</sup> <a name="tokenEndpointAuthMethodInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.tokenEndpointAuthMethodInput"></a>

```java
public java.lang.String getTokenEndpointAuthMethodInput();
```

- *Type:* java.lang.String

---

##### `tosUriInput`<sup>Optional</sup> <a name="tosUriInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.tosUriInput"></a>

```java
public java.lang.String getTosUriInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `userNameTemplateInput`<sup>Optional</sup> <a name="userNameTemplateInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateInput"></a>

```java
public java.lang.String getUserNameTemplateInput();
```

- *Type:* java.lang.String

---

##### `userNameTemplatePushStatusInput`<sup>Optional</sup> <a name="userNameTemplatePushStatusInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplatePushStatusInput"></a>

```java
public java.lang.String getUserNameTemplatePushStatusInput();
```

- *Type:* java.lang.String

---

##### `userNameTemplateSuffixInput`<sup>Optional</sup> <a name="userNameTemplateSuffixInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateSuffixInput"></a>

```java
public java.lang.String getUserNameTemplateSuffixInput();
```

- *Type:* java.lang.String

---

##### `userNameTemplateTypeInput`<sup>Optional</sup> <a name="userNameTemplateTypeInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateTypeInput"></a>

```java
public java.lang.String getUserNameTemplateTypeInput();
```

- *Type:* java.lang.String

---

##### `wildcardRedirectInput`<sup>Optional</sup> <a name="wildcardRedirectInput" id="@cdktf/provider-okta.appOauth.AppOauth.property.wildcardRedirectInput"></a>

```java
public java.lang.String getWildcardRedirectInput();
```

- *Type:* java.lang.String

---

##### `accessibilityErrorRedirectUrl`<sup>Required</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appOauth.AppOauth.property.accessibilityErrorRedirectUrl"></a>

```java
public java.lang.String getAccessibilityErrorRedirectUrl();
```

- *Type:* java.lang.String

---

##### `accessibilityLoginRedirectUrl`<sup>Required</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appOauth.AppOauth.property.accessibilityLoginRedirectUrl"></a>

```java
public java.lang.String getAccessibilityLoginRedirectUrl();
```

- *Type:* java.lang.String

---

##### `accessibilitySelfService`<sup>Required</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.appOauth.AppOauth.property.accessibilitySelfService"></a>

```java
public java.lang.Object getAccessibilitySelfService();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `adminNote`<sup>Required</sup> <a name="adminNote" id="@cdktf/provider-okta.appOauth.AppOauth.property.adminNote"></a>

```java
public java.lang.String getAdminNote();
```

- *Type:* java.lang.String

---

##### `appLinksJson`<sup>Required</sup> <a name="appLinksJson" id="@cdktf/provider-okta.appOauth.AppOauth.property.appLinksJson"></a>

```java
public java.lang.String getAppLinksJson();
```

- *Type:* java.lang.String

---

##### `appSettingsJson`<sup>Required</sup> <a name="appSettingsJson" id="@cdktf/provider-okta.appOauth.AppOauth.property.appSettingsJson"></a>

```java
public java.lang.String getAppSettingsJson();
```

- *Type:* java.lang.String

---

##### `authenticationPolicy`<sup>Required</sup> <a name="authenticationPolicy" id="@cdktf/provider-okta.appOauth.AppOauth.property.authenticationPolicy"></a>

```java
public java.lang.String getAuthenticationPolicy();
```

- *Type:* java.lang.String

---

##### `autoKeyRotation`<sup>Required</sup> <a name="autoKeyRotation" id="@cdktf/provider-okta.appOauth.AppOauth.property.autoKeyRotation"></a>

```java
public java.lang.Object getAutoKeyRotation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autoSubmitToolbar`<sup>Required</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.appOauth.AppOauth.property.autoSubmitToolbar"></a>

```java
public java.lang.Object getAutoSubmitToolbar();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientBasicSecret`<sup>Required</sup> <a name="clientBasicSecret" id="@cdktf/provider-okta.appOauth.AppOauth.property.clientBasicSecret"></a>

```java
public java.lang.String getClientBasicSecret();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-okta.appOauth.AppOauth.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientUri`<sup>Required</sup> <a name="clientUri" id="@cdktf/provider-okta.appOauth.AppOauth.property.clientUri"></a>

```java
public java.lang.String getClientUri();
```

- *Type:* java.lang.String

---

##### `consentMethod`<sup>Required</sup> <a name="consentMethod" id="@cdktf/provider-okta.appOauth.AppOauth.property.consentMethod"></a>

```java
public java.lang.String getConsentMethod();
```

- *Type:* java.lang.String

---

##### `enduserNote`<sup>Required</sup> <a name="enduserNote" id="@cdktf/provider-okta.appOauth.AppOauth.property.enduserNote"></a>

```java
public java.lang.String getEnduserNote();
```

- *Type:* java.lang.String

---

##### `grantTypes`<sup>Required</sup> <a name="grantTypes" id="@cdktf/provider-okta.appOauth.AppOauth.property.grantTypes"></a>

```java
public java.util.List<java.lang.String> getGrantTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hideIos`<sup>Required</sup> <a name="hideIos" id="@cdktf/provider-okta.appOauth.AppOauth.property.hideIos"></a>

```java
public java.lang.Object getHideIos();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hideWeb`<sup>Required</sup> <a name="hideWeb" id="@cdktf/provider-okta.appOauth.AppOauth.property.hideWeb"></a>

```java
public java.lang.Object getHideWeb();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appOauth.AppOauth.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `implicitAssignment`<sup>Required</sup> <a name="implicitAssignment" id="@cdktf/provider-okta.appOauth.AppOauth.property.implicitAssignment"></a>

```java
public java.lang.Object getImplicitAssignment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `issuerMode`<sup>Required</sup> <a name="issuerMode" id="@cdktf/provider-okta.appOauth.AppOauth.property.issuerMode"></a>

```java
public java.lang.String getIssuerMode();
```

- *Type:* java.lang.String

---

##### `jwksUri`<sup>Required</sup> <a name="jwksUri" id="@cdktf/provider-okta.appOauth.AppOauth.property.jwksUri"></a>

```java
public java.lang.String getJwksUri();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appOauth.AppOauth.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `loginMode`<sup>Required</sup> <a name="loginMode" id="@cdktf/provider-okta.appOauth.AppOauth.property.loginMode"></a>

```java
public java.lang.String getLoginMode();
```

- *Type:* java.lang.String

---

##### `loginScopes`<sup>Required</sup> <a name="loginScopes" id="@cdktf/provider-okta.appOauth.AppOauth.property.loginScopes"></a>

```java
public java.util.List<java.lang.String> getLoginScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loginUri`<sup>Required</sup> <a name="loginUri" id="@cdktf/provider-okta.appOauth.AppOauth.property.loginUri"></a>

```java
public java.lang.String getLoginUri();
```

- *Type:* java.lang.String

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktf/provider-okta.appOauth.AppOauth.property.logo"></a>

```java
public java.lang.String getLogo();
```

- *Type:* java.lang.String

---

##### `logoUri`<sup>Required</sup> <a name="logoUri" id="@cdktf/provider-okta.appOauth.AppOauth.property.logoUri"></a>

```java
public java.lang.String getLogoUri();
```

- *Type:* java.lang.String

---

##### `omitSecret`<sup>Required</sup> <a name="omitSecret" id="@cdktf/provider-okta.appOauth.AppOauth.property.omitSecret"></a>

```java
public java.lang.Object getOmitSecret();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pkceRequired`<sup>Required</sup> <a name="pkceRequired" id="@cdktf/provider-okta.appOauth.AppOauth.property.pkceRequired"></a>

```java
public java.lang.Object getPkceRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `policyUri`<sup>Required</sup> <a name="policyUri" id="@cdktf/provider-okta.appOauth.AppOauth.property.policyUri"></a>

```java
public java.lang.String getPolicyUri();
```

- *Type:* java.lang.String

---

##### `postLogoutRedirectUris`<sup>Required</sup> <a name="postLogoutRedirectUris" id="@cdktf/provider-okta.appOauth.AppOauth.property.postLogoutRedirectUris"></a>

```java
public java.util.List<java.lang.String> getPostLogoutRedirectUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-okta.appOauth.AppOauth.property.profile"></a>

```java
public java.lang.String getProfile();
```

- *Type:* java.lang.String

---

##### `redirectUris`<sup>Required</sup> <a name="redirectUris" id="@cdktf/provider-okta.appOauth.AppOauth.property.redirectUris"></a>

```java
public java.util.List<java.lang.String> getRedirectUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `refreshTokenLeeway`<sup>Required</sup> <a name="refreshTokenLeeway" id="@cdktf/provider-okta.appOauth.AppOauth.property.refreshTokenLeeway"></a>

```java
public java.lang.Number getRefreshTokenLeeway();
```

- *Type:* java.lang.Number

---

##### `refreshTokenRotation`<sup>Required</sup> <a name="refreshTokenRotation" id="@cdktf/provider-okta.appOauth.AppOauth.property.refreshTokenRotation"></a>

```java
public java.lang.String getRefreshTokenRotation();
```

- *Type:* java.lang.String

---

##### `responseTypes`<sup>Required</sup> <a name="responseTypes" id="@cdktf/provider-okta.appOauth.AppOauth.property.responseTypes"></a>

```java
public java.util.List<java.lang.String> getResponseTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.appOauth.AppOauth.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tokenEndpointAuthMethod`<sup>Required</sup> <a name="tokenEndpointAuthMethod" id="@cdktf/provider-okta.appOauth.AppOauth.property.tokenEndpointAuthMethod"></a>

```java
public java.lang.String getTokenEndpointAuthMethod();
```

- *Type:* java.lang.String

---

##### `tosUri`<sup>Required</sup> <a name="tosUri" id="@cdktf/provider-okta.appOauth.AppOauth.property.tosUri"></a>

```java
public java.lang.String getTosUri();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appOauth.AppOauth.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `userNameTemplate`<sup>Required</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplate"></a>

```java
public java.lang.String getUserNameTemplate();
```

- *Type:* java.lang.String

---

##### `userNameTemplatePushStatus`<sup>Required</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplatePushStatus"></a>

```java
public java.lang.String getUserNameTemplatePushStatus();
```

- *Type:* java.lang.String

---

##### `userNameTemplateSuffix`<sup>Required</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateSuffix"></a>

```java
public java.lang.String getUserNameTemplateSuffix();
```

- *Type:* java.lang.String

---

##### `userNameTemplateType`<sup>Required</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.appOauth.AppOauth.property.userNameTemplateType"></a>

```java
public java.lang.String getUserNameTemplateType();
```

- *Type:* java.lang.String

---

##### `wildcardRedirect`<sup>Required</sup> <a name="wildcardRedirect" id="@cdktf/provider-okta.appOauth.AppOauth.property.wildcardRedirect"></a>

```java
public java.lang.String getWildcardRedirect();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauth.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.appOauth.AppOauth.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppOauthConfig <a name="AppOauthConfig" id="@cdktf/provider-okta.appOauth.AppOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appOauth.AppOauthConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_oauth.AppOauthConfig;

AppOauthConfig.builder()
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
//  .enduserNote(java.lang.String)
//  .grantTypes(java.util.List<java.lang.String>)
//  .groupsClaim(AppOauthGroupsClaim)
//  .hideIos(java.lang.Boolean)
//  .hideIos(IResolvable)
//  .hideWeb(java.lang.Boolean)
//  .hideWeb(IResolvable)
//  .id(java.lang.String)
//  .implicitAssignment(java.lang.Boolean)
//  .implicitAssignment(IResolvable)
//  .issuerMode(java.lang.String)
//  .jwks(IResolvable)
//  .jwks(java.util.List<AppOauthJwks>)
//  .jwksUri(java.lang.String)
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
//  .status(java.lang.String)
//  .timeouts(AppOauthTimeouts)
//  .tokenEndpointAuthMethod(java.lang.String)
//  .tosUri(java.lang.String)
//  .userNameTemplate(java.lang.String)
//  .userNameTemplatePushStatus(java.lang.String)
//  .userNameTemplateSuffix(java.lang.String)
//  .userNameTemplateType(java.lang.String)
//  .wildcardRedirect(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.label">label</a></code> | <code>java.lang.String</code> | Pretty name of app. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of client application. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>java.lang.String</code> | Custom error page URL. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>java.lang.String</code> | Custom login page URL. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable self service. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.adminNote">adminNote</a></code> | <code>java.lang.String</code> | Application notes for admins. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.appLinksJson">appLinksJson</a></code> | <code>java.lang.String</code> | Displays specific appLinks for the app. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.appSettingsJson">appSettingsJson</a></code> | <code>java.lang.String</code> | Application settings in JSON format. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.authenticationPolicy">authenticationPolicy</a></code> | <code>java.lang.String</code> | Id of this apps authentication policy. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.autoKeyRotation">autoKeyRotation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Requested key rotation mode. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Display auto submit toolbar. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.clientBasicSecret">clientBasicSecret</a></code> | <code>java.lang.String</code> | OAuth client secret key, this can be set when token_endpoint_auth_method is client_secret_basic. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | OAuth client ID. If set during creation, app is created with this id. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.clientUri">clientUri</a></code> | <code>java.lang.String</code> | URI to a web page providing information about the client. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.consentMethod">consentMethod</a></code> | <code>java.lang.String</code> | *Early Access Property*. Indicates whether user consent is required or implicit. Valid values: REQUIRED, TRUSTED. Default value is TRUSTED. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.enduserNote">enduserNote</a></code> | <code>java.lang.String</code> | Application notes for end users. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.grantTypes">grantTypes</a></code> | <code>java.util.List<java.lang.String></code> | List of OAuth 2.0 grant types. Conditional validation params found here https://developer.okta.com/docs/api/resources/apps#credentials-settings-details. Defaults to minimum requirements per app type. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.groupsClaim">groupsClaim</a></code> | <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim">AppOauthGroupsClaim</a></code> | groups_claim block. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.hideIos">hideIos</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon on mobile app. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.hideWeb">hideWeb</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Do not display application icon to users. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#id AppOauth#id}. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.implicitAssignment">implicitAssignment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *Early Access Property*. Enable Federation Broker Mode. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.issuerMode">issuerMode</a></code> | <code>java.lang.String</code> | *Early Access Property*. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.jwks">jwks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appOauth.AppOauthJwks">AppOauthJwks</a>></code> | jwks block. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.jwksUri">jwksUri</a></code> | <code>java.lang.String</code> | URL reference to JWKS. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.loginMode">loginMode</a></code> | <code>java.lang.String</code> | The type of Idp-Initiated login that the client supports, if any. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.loginScopes">loginScopes</a></code> | <code>java.util.List<java.lang.String></code> | List of scopes to use for the request. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.loginUri">loginUri</a></code> | <code>java.lang.String</code> | URI that initiates login. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.logo">logo</a></code> | <code>java.lang.String</code> | Local path to logo of the application. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.logoUri">logoUri</a></code> | <code>java.lang.String</code> | URI that references a logo for the client. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.omitSecret">omitSecret</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This tells the provider not to persist the application's secret to state. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.pkceRequired">pkceRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Require Proof Key for Code Exchange (PKCE) for additional verification key rotation mode. See: https://developer.okta.com/docs/reference/api/apps/#oauth-credential-object. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.policyUri">policyUri</a></code> | <code>java.lang.String</code> | URI to web page providing client policy document. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.postLogoutRedirectUris">postLogoutRedirectUris</a></code> | <code>java.util.List<java.lang.String></code> | List of URIs for redirection after logout. Note: see okta_app_oauth_post_logout_redirect_uri for appending to this list in a decentralized way. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.profile">profile</a></code> | <code>java.lang.String</code> | Custom JSON that represents an OAuth application's profile. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.redirectUris">redirectUris</a></code> | <code>java.util.List<java.lang.String></code> | List of URIs for use in the redirect-based flow. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.refreshTokenLeeway">refreshTokenLeeway</a></code> | <code>java.lang.Number</code> | *Early Access Property* Grace period for token rotation. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.refreshTokenRotation">refreshTokenRotation</a></code> | <code>java.lang.String</code> | *Early Access Property* Refresh token rotation behavior. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.responseTypes">responseTypes</a></code> | <code>java.util.List<java.lang.String></code> | List of OAuth 2.0 response type strings. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.status">status</a></code> | <code>java.lang.String</code> | Status of application. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeouts">AppOauthTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.tokenEndpointAuthMethod">tokenEndpointAuthMethod</a></code> | <code>java.lang.String</code> | Requested authentication method for the token endpoint. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.tosUri">tosUri</a></code> | <code>java.lang.String</code> | URI to web page providing client tos (terms of service). |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.userNameTemplate">userNameTemplate</a></code> | <code>java.lang.String</code> | Username template. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>java.lang.String</code> | Push username on update. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>java.lang.String</code> | Username template suffix. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.userNameTemplateType">userNameTemplateType</a></code> | <code>java.lang.String</code> | Username template type. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthConfig.property.wildcardRedirect">wildcardRedirect</a></code> | <code>java.lang.String</code> | *Early Access Property*. Indicates if the client is allowed to use wildcard matching of redirect_uris. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Pretty name of app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#label AppOauth#label}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of client application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#type AppOauth#type}

---

##### `accessibilityErrorRedirectUrl`<sup>Optional</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.accessibilityErrorRedirectUrl"></a>

```java
public java.lang.String getAccessibilityErrorRedirectUrl();
```

- *Type:* java.lang.String

Custom error page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#accessibility_error_redirect_url AppOauth#accessibility_error_redirect_url}

---

##### `accessibilityLoginRedirectUrl`<sup>Optional</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.accessibilityLoginRedirectUrl"></a>

```java
public java.lang.String getAccessibilityLoginRedirectUrl();
```

- *Type:* java.lang.String

Custom login page URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#accessibility_login_redirect_url AppOauth#accessibility_login_redirect_url}

---

##### `accessibilitySelfService`<sup>Optional</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.accessibilitySelfService"></a>

```java
public java.lang.Object getAccessibilitySelfService();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable self service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#accessibility_self_service AppOauth#accessibility_self_service}

---

##### `adminNote`<sup>Optional</sup> <a name="adminNote" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.adminNote"></a>

```java
public java.lang.String getAdminNote();
```

- *Type:* java.lang.String

Application notes for admins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#admin_note AppOauth#admin_note}

---

##### `appLinksJson`<sup>Optional</sup> <a name="appLinksJson" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.appLinksJson"></a>

```java
public java.lang.String getAppLinksJson();
```

- *Type:* java.lang.String

Displays specific appLinks for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#app_links_json AppOauth#app_links_json}

---

##### `appSettingsJson`<sup>Optional</sup> <a name="appSettingsJson" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.appSettingsJson"></a>

```java
public java.lang.String getAppSettingsJson();
```

- *Type:* java.lang.String

Application settings in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#app_settings_json AppOauth#app_settings_json}

---

##### `authenticationPolicy`<sup>Optional</sup> <a name="authenticationPolicy" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.authenticationPolicy"></a>

```java
public java.lang.String getAuthenticationPolicy();
```

- *Type:* java.lang.String

Id of this apps authentication policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#authentication_policy AppOauth#authentication_policy}

---

##### `autoKeyRotation`<sup>Optional</sup> <a name="autoKeyRotation" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.autoKeyRotation"></a>

```java
public java.lang.Object getAutoKeyRotation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Requested key rotation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#auto_key_rotation AppOauth#auto_key_rotation}

---

##### `autoSubmitToolbar`<sup>Optional</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.autoSubmitToolbar"></a>

```java
public java.lang.Object getAutoSubmitToolbar();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Display auto submit toolbar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#auto_submit_toolbar AppOauth#auto_submit_toolbar}

---

##### `clientBasicSecret`<sup>Optional</sup> <a name="clientBasicSecret" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.clientBasicSecret"></a>

```java
public java.lang.String getClientBasicSecret();
```

- *Type:* java.lang.String

OAuth client secret key, this can be set when token_endpoint_auth_method is client_secret_basic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#client_basic_secret AppOauth#client_basic_secret}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

OAuth client ID. If set during creation, app is created with this id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#client_id AppOauth#client_id}

---

##### `clientUri`<sup>Optional</sup> <a name="clientUri" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.clientUri"></a>

```java
public java.lang.String getClientUri();
```

- *Type:* java.lang.String

URI to a web page providing information about the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#client_uri AppOauth#client_uri}

---

##### `consentMethod`<sup>Optional</sup> <a name="consentMethod" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.consentMethod"></a>

```java
public java.lang.String getConsentMethod();
```

- *Type:* java.lang.String

*Early Access Property*. Indicates whether user consent is required or implicit. Valid values: REQUIRED, TRUSTED. Default value is TRUSTED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#consent_method AppOauth#consent_method}

---

##### `enduserNote`<sup>Optional</sup> <a name="enduserNote" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.enduserNote"></a>

```java
public java.lang.String getEnduserNote();
```

- *Type:* java.lang.String

Application notes for end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#enduser_note AppOauth#enduser_note}

---

##### `grantTypes`<sup>Optional</sup> <a name="grantTypes" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.grantTypes"></a>

```java
public java.util.List<java.lang.String> getGrantTypes();
```

- *Type:* java.util.List<java.lang.String>

List of OAuth 2.0 grant types. Conditional validation params found here https://developer.okta.com/docs/api/resources/apps#credentials-settings-details. Defaults to minimum requirements per app type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#grant_types AppOauth#grant_types}

---

##### `groupsClaim`<sup>Optional</sup> <a name="groupsClaim" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.groupsClaim"></a>

```java
public AppOauthGroupsClaim getGroupsClaim();
```

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim">AppOauthGroupsClaim</a>

groups_claim block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#groups_claim AppOauth#groups_claim}

---

##### `hideIos`<sup>Optional</sup> <a name="hideIos" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.hideIos"></a>

```java
public java.lang.Object getHideIos();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon on mobile app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#hide_ios AppOauth#hide_ios}

---

##### `hideWeb`<sup>Optional</sup> <a name="hideWeb" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.hideWeb"></a>

```java
public java.lang.Object getHideWeb();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Do not display application icon to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#hide_web AppOauth#hide_web}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#id AppOauth#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `implicitAssignment`<sup>Optional</sup> <a name="implicitAssignment" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.implicitAssignment"></a>

```java
public java.lang.Object getImplicitAssignment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

*Early Access Property*. Enable Federation Broker Mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#implicit_assignment AppOauth#implicit_assignment}

---

##### `issuerMode`<sup>Optional</sup> <a name="issuerMode" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.issuerMode"></a>

```java
public java.lang.String getIssuerMode();
```

- *Type:* java.lang.String

*Early Access Property*.

Indicates whether the Okta Authorization Server uses the original Okta org domain URL or a custom domain URL as the issuer of ID token for this client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#issuer_mode AppOauth#issuer_mode}

---

##### `jwks`<sup>Optional</sup> <a name="jwks" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.jwks"></a>

```java
public java.lang.Object getJwks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appOauth.AppOauthJwks">AppOauthJwks</a>>

jwks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#jwks AppOauth#jwks}

---

##### `jwksUri`<sup>Optional</sup> <a name="jwksUri" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.jwksUri"></a>

```java
public java.lang.String getJwksUri();
```

- *Type:* java.lang.String

URL reference to JWKS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#jwks_uri AppOauth#jwks_uri}

---

##### `loginMode`<sup>Optional</sup> <a name="loginMode" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.loginMode"></a>

```java
public java.lang.String getLoginMode();
```

- *Type:* java.lang.String

The type of Idp-Initiated login that the client supports, if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#login_mode AppOauth#login_mode}

---

##### `loginScopes`<sup>Optional</sup> <a name="loginScopes" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.loginScopes"></a>

```java
public java.util.List<java.lang.String> getLoginScopes();
```

- *Type:* java.util.List<java.lang.String>

List of scopes to use for the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#login_scopes AppOauth#login_scopes}

---

##### `loginUri`<sup>Optional</sup> <a name="loginUri" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.loginUri"></a>

```java
public java.lang.String getLoginUri();
```

- *Type:* java.lang.String

URI that initiates login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#login_uri AppOauth#login_uri}

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.logo"></a>

```java
public java.lang.String getLogo();
```

- *Type:* java.lang.String

Local path to logo of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#logo AppOauth#logo}

---

##### `logoUri`<sup>Optional</sup> <a name="logoUri" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.logoUri"></a>

```java
public java.lang.String getLogoUri();
```

- *Type:* java.lang.String

URI that references a logo for the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#logo_uri AppOauth#logo_uri}

---

##### `omitSecret`<sup>Optional</sup> <a name="omitSecret" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.omitSecret"></a>

```java
public java.lang.Object getOmitSecret();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This tells the provider not to persist the application's secret to state.

If this is ever changes from true => false your app will be recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#omit_secret AppOauth#omit_secret}

---

##### `pkceRequired`<sup>Optional</sup> <a name="pkceRequired" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.pkceRequired"></a>

```java
public java.lang.Object getPkceRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Require Proof Key for Code Exchange (PKCE) for additional verification key rotation mode. See: https://developer.okta.com/docs/reference/api/apps/#oauth-credential-object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#pkce_required AppOauth#pkce_required}

---

##### `policyUri`<sup>Optional</sup> <a name="policyUri" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.policyUri"></a>

```java
public java.lang.String getPolicyUri();
```

- *Type:* java.lang.String

URI to web page providing client policy document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#policy_uri AppOauth#policy_uri}

---

##### `postLogoutRedirectUris`<sup>Optional</sup> <a name="postLogoutRedirectUris" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.postLogoutRedirectUris"></a>

```java
public java.util.List<java.lang.String> getPostLogoutRedirectUris();
```

- *Type:* java.util.List<java.lang.String>

List of URIs for redirection after logout. Note: see okta_app_oauth_post_logout_redirect_uri for appending to this list in a decentralized way.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#post_logout_redirect_uris AppOauth#post_logout_redirect_uris}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.profile"></a>

```java
public java.lang.String getProfile();
```

- *Type:* java.lang.String

Custom JSON that represents an OAuth application's profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#profile AppOauth#profile}

---

##### `redirectUris`<sup>Optional</sup> <a name="redirectUris" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.redirectUris"></a>

```java
public java.util.List<java.lang.String> getRedirectUris();
```

- *Type:* java.util.List<java.lang.String>

List of URIs for use in the redirect-based flow.

This is required for all application types except service. Note: see okta_app_oauth_redirect_uri for appending to this list in a decentralized way.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#redirect_uris AppOauth#redirect_uris}

---

##### `refreshTokenLeeway`<sup>Optional</sup> <a name="refreshTokenLeeway" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.refreshTokenLeeway"></a>

```java
public java.lang.Number getRefreshTokenLeeway();
```

- *Type:* java.lang.Number

*Early Access Property* Grace period for token rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#refresh_token_leeway AppOauth#refresh_token_leeway}

---

##### `refreshTokenRotation`<sup>Optional</sup> <a name="refreshTokenRotation" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.refreshTokenRotation"></a>

```java
public java.lang.String getRefreshTokenRotation();
```

- *Type:* java.lang.String

*Early Access Property* Refresh token rotation behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#refresh_token_rotation AppOauth#refresh_token_rotation}

---

##### `responseTypes`<sup>Optional</sup> <a name="responseTypes" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.responseTypes"></a>

```java
public java.util.List<java.lang.String> getResponseTypes();
```

- *Type:* java.util.List<java.lang.String>

List of OAuth 2.0 response type strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#response_types AppOauth#response_types}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Status of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#status AppOauth#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.timeouts"></a>

```java
public AppOauthTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthTimeouts">AppOauthTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#timeouts AppOauth#timeouts}

---

##### `tokenEndpointAuthMethod`<sup>Optional</sup> <a name="tokenEndpointAuthMethod" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.tokenEndpointAuthMethod"></a>

```java
public java.lang.String getTokenEndpointAuthMethod();
```

- *Type:* java.lang.String

Requested authentication method for the token endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#token_endpoint_auth_method AppOauth#token_endpoint_auth_method}

---

##### `tosUri`<sup>Optional</sup> <a name="tosUri" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.tosUri"></a>

```java
public java.lang.String getTosUri();
```

- *Type:* java.lang.String

URI to web page providing client tos (terms of service).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#tos_uri AppOauth#tos_uri}

---

##### `userNameTemplate`<sup>Optional</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.userNameTemplate"></a>

```java
public java.lang.String getUserNameTemplate();
```

- *Type:* java.lang.String

Username template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#user_name_template AppOauth#user_name_template}

---

##### `userNameTemplatePushStatus`<sup>Optional</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.userNameTemplatePushStatus"></a>

```java
public java.lang.String getUserNameTemplatePushStatus();
```

- *Type:* java.lang.String

Push username on update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#user_name_template_push_status AppOauth#user_name_template_push_status}

---

##### `userNameTemplateSuffix`<sup>Optional</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.userNameTemplateSuffix"></a>

```java
public java.lang.String getUserNameTemplateSuffix();
```

- *Type:* java.lang.String

Username template suffix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#user_name_template_suffix AppOauth#user_name_template_suffix}

---

##### `userNameTemplateType`<sup>Optional</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.userNameTemplateType"></a>

```java
public java.lang.String getUserNameTemplateType();
```

- *Type:* java.lang.String

Username template type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#user_name_template_type AppOauth#user_name_template_type}

---

##### `wildcardRedirect`<sup>Optional</sup> <a name="wildcardRedirect" id="@cdktf/provider-okta.appOauth.AppOauthConfig.property.wildcardRedirect"></a>

```java
public java.lang.String getWildcardRedirect();
```

- *Type:* java.lang.String

*Early Access Property*. Indicates if the client is allowed to use wildcard matching of redirect_uris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#wildcard_redirect AppOauth#wildcard_redirect}

---

### AppOauthGroupsClaim <a name="AppOauthGroupsClaim" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaim"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_oauth.AppOauthGroupsClaim;

AppOauthGroupsClaim.builder()
    .name(java.lang.String)
    .type(java.lang.String)
    .value(java.lang.String)
//  .filterType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.property.name">name</a></code> | <code>java.lang.String</code> | Name of the claim that will be used in the token. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.property.type">type</a></code> | <code>java.lang.String</code> | Groups claim type. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.property.value">value</a></code> | <code>java.lang.String</code> | Value of the claim. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.property.filterType">filterType</a></code> | <code>java.lang.String</code> | Groups claim filter. Can only be set if type is FILTER. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the claim that will be used in the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#name AppOauth#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Groups claim type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#type AppOauth#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Value of the claim.

Can be an Okta Expression Language statement that evaluates at the time the token is minted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#value AppOauth#value}

---

##### `filterType`<sup>Optional</sup> <a name="filterType" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaim.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

Groups claim filter. Can only be set if type is FILTER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#filter_type AppOauth#filter_type}

---

### AppOauthJwks <a name="AppOauthJwks" id="@cdktf/provider-okta.appOauth.AppOauthJwks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appOauth.AppOauthJwks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_oauth.AppOauthJwks;

AppOauthJwks.builder()
    .kid(java.lang.String)
    .kty(java.lang.String)
//  .e(java.lang.String)
//  .n(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwks.property.kid">kid</a></code> | <code>java.lang.String</code> | Key ID. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwks.property.kty">kty</a></code> | <code>java.lang.String</code> | Key type. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwks.property.e">e</a></code> | <code>java.lang.String</code> | RSA Exponent. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwks.property.n">n</a></code> | <code>java.lang.String</code> | RSA Modulus. |

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktf/provider-okta.appOauth.AppOauthJwks.property.kid"></a>

```java
public java.lang.String getKid();
```

- *Type:* java.lang.String

Key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#kid AppOauth#kid}

---

##### `kty`<sup>Required</sup> <a name="kty" id="@cdktf/provider-okta.appOauth.AppOauthJwks.property.kty"></a>

```java
public java.lang.String getKty();
```

- *Type:* java.lang.String

Key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#kty AppOauth#kty}

---

##### `e`<sup>Optional</sup> <a name="e" id="@cdktf/provider-okta.appOauth.AppOauthJwks.property.e"></a>

```java
public java.lang.String getE();
```

- *Type:* java.lang.String

RSA Exponent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#e AppOauth#e}

---

##### `n`<sup>Optional</sup> <a name="n" id="@cdktf/provider-okta.appOauth.AppOauthJwks.property.n"></a>

```java
public java.lang.String getN();
```

- *Type:* java.lang.String

RSA Modulus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#n AppOauth#n}

---

### AppOauthTimeouts <a name="AppOauthTimeouts" id="@cdktf/provider-okta.appOauth.AppOauthTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appOauth.AppOauthTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_oauth.AppOauthTimeouts;

AppOauthTimeouts.builder()
//  .create(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#create AppOauth#create}. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#read AppOauth#read}. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#update AppOauth#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-okta.appOauth.AppOauthTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#create AppOauth#create}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-okta.appOauth.AppOauthTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#read AppOauth#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-okta.appOauth.AppOauthTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/app_oauth#update AppOauth#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppOauthGroupsClaimOutputReference <a name="AppOauthGroupsClaimOutputReference" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_oauth.AppOauthGroupsClaimOutputReference;

new AppOauthGroupsClaimOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.resetFilterType">resetFilterType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilterType` <a name="resetFilterType" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.resetFilterType"></a>

```java
public void resetFilterType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.issuerMode">issuerMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.filterTypeInput">filterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.filterType">filterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim">AppOauthGroupsClaim</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `issuerMode`<sup>Required</sup> <a name="issuerMode" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.issuerMode"></a>

```java
public java.lang.String getIssuerMode();
```

- *Type:* java.lang.String

---

##### `filterTypeInput`<sup>Optional</sup> <a name="filterTypeInput" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.filterTypeInput"></a>

```java
public java.lang.String getFilterTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appOauth.AppOauthGroupsClaimOutputReference.property.internalValue"></a>

```java
public AppOauthGroupsClaim getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-okta.appOauth.AppOauthGroupsClaim">AppOauthGroupsClaim</a>

---


### AppOauthJwksList <a name="AppOauthJwksList" id="@cdktf/provider-okta.appOauth.AppOauthJwksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_oauth.AppOauthJwksList;

new AppOauthJwksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.get"></a>

```java
public AppOauthJwksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appOauth.AppOauthJwks">AppOauthJwks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appOauth.AppOauthJwksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-okta.appOauth.AppOauthJwks">AppOauthJwks</a>>

---


### AppOauthJwksOutputReference <a name="AppOauthJwksOutputReference" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_oauth.AppOauthJwksOutputReference;

new AppOauthJwksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.resetE">resetE</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.resetN">resetN</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetE` <a name="resetE" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.resetE"></a>

```java
public void resetE()
```

##### `resetN` <a name="resetN" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.resetN"></a>

```java
public void resetN()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.eInput">eInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.kidInput">kidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.ktyInput">ktyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.nInput">nInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.e">e</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.kid">kid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.kty">kty</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.n">n</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.appOauth.AppOauthJwks">AppOauthJwks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eInput`<sup>Optional</sup> <a name="eInput" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.eInput"></a>

```java
public java.lang.String getEInput();
```

- *Type:* java.lang.String

---

##### `kidInput`<sup>Optional</sup> <a name="kidInput" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.kidInput"></a>

```java
public java.lang.String getKidInput();
```

- *Type:* java.lang.String

---

##### `ktyInput`<sup>Optional</sup> <a name="ktyInput" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.ktyInput"></a>

```java
public java.lang.String getKtyInput();
```

- *Type:* java.lang.String

---

##### `nInput`<sup>Optional</sup> <a name="nInput" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.nInput"></a>

```java
public java.lang.String getNInput();
```

- *Type:* java.lang.String

---

##### `e`<sup>Required</sup> <a name="e" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.e"></a>

```java
public java.lang.String getE();
```

- *Type:* java.lang.String

---

##### `kid`<sup>Required</sup> <a name="kid" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.kid"></a>

```java
public java.lang.String getKid();
```

- *Type:* java.lang.String

---

##### `kty`<sup>Required</sup> <a name="kty" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.kty"></a>

```java
public java.lang.String getKty();
```

- *Type:* java.lang.String

---

##### `n`<sup>Required</sup> <a name="n" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.n"></a>

```java
public java.lang.String getN();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appOauth.AppOauthJwksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.appOauth.AppOauthJwks">AppOauthJwks</a>

---


### AppOauthTimeoutsOutputReference <a name="AppOauthTimeoutsOutputReference" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_oauth.AppOauthTimeoutsOutputReference;

new AppOauthTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.appOauth.AppOauthTimeouts">AppOauthTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.appOauth.AppOauthTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-okta.appOauth.AppOauthTimeouts">AppOauthTimeouts</a>

---



