# `okta_auth_server_policy_rule`

Refer to the Terraform Registory for docs: [`okta_auth_server_policy_rule`](https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule).

# `authServerPolicyRule` Submodule <a name="`authServerPolicyRule` Submodule" id="@cdktf/provider-okta.authServerPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthServerPolicyRule <a name="AuthServerPolicyRule" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule okta_auth_server_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.auth_server_policy_rule.AuthServerPolicyRule;

AuthServerPolicyRule.Builder.create(Construct scope, java.lang.String id)
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
    .authServerId(java.lang.String)
    .grantTypeWhitelist(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .policyId(java.lang.String)
    .priority(java.lang.Number)
//  .accessTokenLifetimeMinutes(java.lang.Number)
//  .groupBlacklist(java.util.List<java.lang.String>)
//  .groupWhitelist(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .inlineHookId(java.lang.String)
//  .refreshTokenLifetimeMinutes(java.lang.Number)
//  .refreshTokenWindowMinutes(java.lang.Number)
//  .scopeWhitelist(java.util.List<java.lang.String>)
//  .status(java.lang.String)
//  .type(java.lang.String)
//  .userBlacklist(java.util.List<java.lang.String>)
//  .userWhitelist(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.authServerId">authServerId</a></code> | <code>java.lang.String</code> | Auth server ID. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.grantTypeWhitelist">grantTypeWhitelist</a></code> | <code>java.util.List<java.lang.String></code> | Accepted grant type values: authorization_code, implicit, password, client_credentials. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Auth server policy rule name. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.policyId">policyId</a></code> | <code>java.lang.String</code> | Auth server policy ID. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Priority of the auth server policy rule. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.accessTokenLifetimeMinutes">accessTokenLifetimeMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#access_token_lifetime_minutes AuthServerPolicyRule#access_token_lifetime_minutes}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.groupBlacklist">groupBlacklist</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#group_blacklist AuthServerPolicyRule#group_blacklist}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.groupWhitelist">groupWhitelist</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#group_whitelist AuthServerPolicyRule#group_whitelist}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#id AuthServerPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.inlineHookId">inlineHookId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#inline_hook_id AuthServerPolicyRule#inline_hook_id}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.refreshTokenLifetimeMinutes">refreshTokenLifetimeMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#refresh_token_lifetime_minutes AuthServerPolicyRule#refresh_token_lifetime_minutes}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.refreshTokenWindowMinutes">refreshTokenWindowMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#refresh_token_window_minutes AuthServerPolicyRule#refresh_token_window_minutes}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.scopeWhitelist">scopeWhitelist</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#scope_whitelist AuthServerPolicyRule#scope_whitelist}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#status AuthServerPolicyRule#status}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Auth server policy rule type, unlikely this will be anything other then the default. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.userBlacklist">userBlacklist</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#user_blacklist AuthServerPolicyRule#user_blacklist}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.userWhitelist">userWhitelist</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#user_whitelist AuthServerPolicyRule#user_whitelist}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authServerId`<sup>Required</sup> <a name="authServerId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.authServerId"></a>

- *Type:* java.lang.String

Auth server ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#auth_server_id AuthServerPolicyRule#auth_server_id}

---

##### `grantTypeWhitelist`<sup>Required</sup> <a name="grantTypeWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.grantTypeWhitelist"></a>

- *Type:* java.util.List<java.lang.String>

Accepted grant type values: authorization_code, implicit, password, client_credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#grant_type_whitelist AuthServerPolicyRule#grant_type_whitelist}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Auth server policy rule name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#name AuthServerPolicyRule#name}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.policyId"></a>

- *Type:* java.lang.String

Auth server policy ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#policy_id AuthServerPolicyRule#policy_id}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Priority of the auth server policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#priority AuthServerPolicyRule#priority}

---

##### `accessTokenLifetimeMinutes`<sup>Optional</sup> <a name="accessTokenLifetimeMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.accessTokenLifetimeMinutes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#access_token_lifetime_minutes AuthServerPolicyRule#access_token_lifetime_minutes}.

---

##### `groupBlacklist`<sup>Optional</sup> <a name="groupBlacklist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.groupBlacklist"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#group_blacklist AuthServerPolicyRule#group_blacklist}.

---

##### `groupWhitelist`<sup>Optional</sup> <a name="groupWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.groupWhitelist"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#group_whitelist AuthServerPolicyRule#group_whitelist}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#id AuthServerPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inlineHookId`<sup>Optional</sup> <a name="inlineHookId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.inlineHookId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#inline_hook_id AuthServerPolicyRule#inline_hook_id}.

---

##### `refreshTokenLifetimeMinutes`<sup>Optional</sup> <a name="refreshTokenLifetimeMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.refreshTokenLifetimeMinutes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#refresh_token_lifetime_minutes AuthServerPolicyRule#refresh_token_lifetime_minutes}.

---

##### `refreshTokenWindowMinutes`<sup>Optional</sup> <a name="refreshTokenWindowMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.refreshTokenWindowMinutes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#refresh_token_window_minutes AuthServerPolicyRule#refresh_token_window_minutes}.

---

##### `scopeWhitelist`<sup>Optional</sup> <a name="scopeWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.scopeWhitelist"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#scope_whitelist AuthServerPolicyRule#scope_whitelist}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#status AuthServerPolicyRule#status}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Auth server policy rule type, unlikely this will be anything other then the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#type AuthServerPolicyRule#type}

---

##### `userBlacklist`<sup>Optional</sup> <a name="userBlacklist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.userBlacklist"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#user_blacklist AuthServerPolicyRule#user_blacklist}.

---

##### `userWhitelist`<sup>Optional</sup> <a name="userWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.userWhitelist"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#user_whitelist AuthServerPolicyRule#user_whitelist}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetAccessTokenLifetimeMinutes">resetAccessTokenLifetimeMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetGroupBlacklist">resetGroupBlacklist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetGroupWhitelist">resetGroupWhitelist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetInlineHookId">resetInlineHookId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetRefreshTokenLifetimeMinutes">resetRefreshTokenLifetimeMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetRefreshTokenWindowMinutes">resetRefreshTokenWindowMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetScopeWhitelist">resetScopeWhitelist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetUserBlacklist">resetUserBlacklist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetUserWhitelist">resetUserWhitelist</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAccessTokenLifetimeMinutes` <a name="resetAccessTokenLifetimeMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetAccessTokenLifetimeMinutes"></a>

```java
public void resetAccessTokenLifetimeMinutes()
```

##### `resetGroupBlacklist` <a name="resetGroupBlacklist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetGroupBlacklist"></a>

```java
public void resetGroupBlacklist()
```

##### `resetGroupWhitelist` <a name="resetGroupWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetGroupWhitelist"></a>

```java
public void resetGroupWhitelist()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetId"></a>

```java
public void resetId()
```

##### `resetInlineHookId` <a name="resetInlineHookId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetInlineHookId"></a>

```java
public void resetInlineHookId()
```

##### `resetRefreshTokenLifetimeMinutes` <a name="resetRefreshTokenLifetimeMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetRefreshTokenLifetimeMinutes"></a>

```java
public void resetRefreshTokenLifetimeMinutes()
```

##### `resetRefreshTokenWindowMinutes` <a name="resetRefreshTokenWindowMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetRefreshTokenWindowMinutes"></a>

```java
public void resetRefreshTokenWindowMinutes()
```

##### `resetScopeWhitelist` <a name="resetScopeWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetScopeWhitelist"></a>

```java
public void resetScopeWhitelist()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetType"></a>

```java
public void resetType()
```

##### `resetUserBlacklist` <a name="resetUserBlacklist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetUserBlacklist"></a>

```java
public void resetUserBlacklist()
```

##### `resetUserWhitelist` <a name="resetUserWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetUserWhitelist"></a>

```java
public void resetUserWhitelist()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.auth_server_policy_rule.AuthServerPolicyRule;

AuthServerPolicyRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.auth_server_policy_rule.AuthServerPolicyRule;

AuthServerPolicyRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.auth_server_policy_rule.AuthServerPolicyRule;

AuthServerPolicyRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.accessTokenLifetimeMinutesInput">accessTokenLifetimeMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.authServerIdInput">authServerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.grantTypeWhitelistInput">grantTypeWhitelistInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupBlacklistInput">groupBlacklistInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupWhitelistInput">groupWhitelistInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.inlineHookIdInput">inlineHookIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenLifetimeMinutesInput">refreshTokenLifetimeMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenWindowMinutesInput">refreshTokenWindowMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.scopeWhitelistInput">scopeWhitelistInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userBlacklistInput">userBlacklistInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userWhitelistInput">userWhitelistInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.accessTokenLifetimeMinutes">accessTokenLifetimeMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.authServerId">authServerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.grantTypeWhitelist">grantTypeWhitelist</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupBlacklist">groupBlacklist</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupWhitelist">groupWhitelist</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.inlineHookId">inlineHookId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenLifetimeMinutes">refreshTokenLifetimeMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenWindowMinutes">refreshTokenWindowMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.scopeWhitelist">scopeWhitelist</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userBlacklist">userBlacklist</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userWhitelist">userWhitelist</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessTokenLifetimeMinutesInput`<sup>Optional</sup> <a name="accessTokenLifetimeMinutesInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.accessTokenLifetimeMinutesInput"></a>

```java
public java.lang.Number getAccessTokenLifetimeMinutesInput();
```

- *Type:* java.lang.Number

---

##### `authServerIdInput`<sup>Optional</sup> <a name="authServerIdInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.authServerIdInput"></a>

```java
public java.lang.String getAuthServerIdInput();
```

- *Type:* java.lang.String

---

##### `grantTypeWhitelistInput`<sup>Optional</sup> <a name="grantTypeWhitelistInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.grantTypeWhitelistInput"></a>

```java
public java.util.List<java.lang.String> getGrantTypeWhitelistInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupBlacklistInput`<sup>Optional</sup> <a name="groupBlacklistInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupBlacklistInput"></a>

```java
public java.util.List<java.lang.String> getGroupBlacklistInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupWhitelistInput`<sup>Optional</sup> <a name="groupWhitelistInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupWhitelistInput"></a>

```java
public java.util.List<java.lang.String> getGroupWhitelistInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inlineHookIdInput`<sup>Optional</sup> <a name="inlineHookIdInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.inlineHookIdInput"></a>

```java
public java.lang.String getInlineHookIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.policyIdInput"></a>

```java
public java.lang.String getPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `refreshTokenLifetimeMinutesInput`<sup>Optional</sup> <a name="refreshTokenLifetimeMinutesInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenLifetimeMinutesInput"></a>

```java
public java.lang.Number getRefreshTokenLifetimeMinutesInput();
```

- *Type:* java.lang.Number

---

##### `refreshTokenWindowMinutesInput`<sup>Optional</sup> <a name="refreshTokenWindowMinutesInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenWindowMinutesInput"></a>

```java
public java.lang.Number getRefreshTokenWindowMinutesInput();
```

- *Type:* java.lang.Number

---

##### `scopeWhitelistInput`<sup>Optional</sup> <a name="scopeWhitelistInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.scopeWhitelistInput"></a>

```java
public java.util.List<java.lang.String> getScopeWhitelistInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `userBlacklistInput`<sup>Optional</sup> <a name="userBlacklistInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userBlacklistInput"></a>

```java
public java.util.List<java.lang.String> getUserBlacklistInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userWhitelistInput`<sup>Optional</sup> <a name="userWhitelistInput" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userWhitelistInput"></a>

```java
public java.util.List<java.lang.String> getUserWhitelistInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accessTokenLifetimeMinutes`<sup>Required</sup> <a name="accessTokenLifetimeMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.accessTokenLifetimeMinutes"></a>

```java
public java.lang.Number getAccessTokenLifetimeMinutes();
```

- *Type:* java.lang.Number

---

##### `authServerId`<sup>Required</sup> <a name="authServerId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.authServerId"></a>

```java
public java.lang.String getAuthServerId();
```

- *Type:* java.lang.String

---

##### `grantTypeWhitelist`<sup>Required</sup> <a name="grantTypeWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.grantTypeWhitelist"></a>

```java
public java.util.List<java.lang.String> getGrantTypeWhitelist();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupBlacklist`<sup>Required</sup> <a name="groupBlacklist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupBlacklist"></a>

```java
public java.util.List<java.lang.String> getGroupBlacklist();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupWhitelist`<sup>Required</sup> <a name="groupWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupWhitelist"></a>

```java
public java.util.List<java.lang.String> getGroupWhitelist();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inlineHookId`<sup>Required</sup> <a name="inlineHookId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.inlineHookId"></a>

```java
public java.lang.String getInlineHookId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `refreshTokenLifetimeMinutes`<sup>Required</sup> <a name="refreshTokenLifetimeMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenLifetimeMinutes"></a>

```java
public java.lang.Number getRefreshTokenLifetimeMinutes();
```

- *Type:* java.lang.Number

---

##### `refreshTokenWindowMinutes`<sup>Required</sup> <a name="refreshTokenWindowMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenWindowMinutes"></a>

```java
public java.lang.Number getRefreshTokenWindowMinutes();
```

- *Type:* java.lang.Number

---

##### `scopeWhitelist`<sup>Required</sup> <a name="scopeWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.scopeWhitelist"></a>

```java
public java.util.List<java.lang.String> getScopeWhitelist();
```

- *Type:* java.util.List<java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `userBlacklist`<sup>Required</sup> <a name="userBlacklist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userBlacklist"></a>

```java
public java.util.List<java.lang.String> getUserBlacklist();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userWhitelist`<sup>Required</sup> <a name="userWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userWhitelist"></a>

```java
public java.util.List<java.lang.String> getUserWhitelist();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AuthServerPolicyRuleConfig <a name="AuthServerPolicyRuleConfig" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.auth_server_policy_rule.AuthServerPolicyRuleConfig;

AuthServerPolicyRuleConfig.builder()
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
    .authServerId(java.lang.String)
    .grantTypeWhitelist(java.util.List<java.lang.String>)
    .name(java.lang.String)
    .policyId(java.lang.String)
    .priority(java.lang.Number)
//  .accessTokenLifetimeMinutes(java.lang.Number)
//  .groupBlacklist(java.util.List<java.lang.String>)
//  .groupWhitelist(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .inlineHookId(java.lang.String)
//  .refreshTokenLifetimeMinutes(java.lang.Number)
//  .refreshTokenWindowMinutes(java.lang.Number)
//  .scopeWhitelist(java.util.List<java.lang.String>)
//  .status(java.lang.String)
//  .type(java.lang.String)
//  .userBlacklist(java.util.List<java.lang.String>)
//  .userWhitelist(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.authServerId">authServerId</a></code> | <code>java.lang.String</code> | Auth server ID. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.grantTypeWhitelist">grantTypeWhitelist</a></code> | <code>java.util.List<java.lang.String></code> | Accepted grant type values: authorization_code, implicit, password, client_credentials. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Auth server policy rule name. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.policyId">policyId</a></code> | <code>java.lang.String</code> | Auth server policy ID. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Priority of the auth server policy rule. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.accessTokenLifetimeMinutes">accessTokenLifetimeMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#access_token_lifetime_minutes AuthServerPolicyRule#access_token_lifetime_minutes}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.groupBlacklist">groupBlacklist</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#group_blacklist AuthServerPolicyRule#group_blacklist}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.groupWhitelist">groupWhitelist</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#group_whitelist AuthServerPolicyRule#group_whitelist}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#id AuthServerPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.inlineHookId">inlineHookId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#inline_hook_id AuthServerPolicyRule#inline_hook_id}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.refreshTokenLifetimeMinutes">refreshTokenLifetimeMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#refresh_token_lifetime_minutes AuthServerPolicyRule#refresh_token_lifetime_minutes}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.refreshTokenWindowMinutes">refreshTokenWindowMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#refresh_token_window_minutes AuthServerPolicyRule#refresh_token_window_minutes}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.scopeWhitelist">scopeWhitelist</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#scope_whitelist AuthServerPolicyRule#scope_whitelist}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#status AuthServerPolicyRule#status}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.type">type</a></code> | <code>java.lang.String</code> | Auth server policy rule type, unlikely this will be anything other then the default. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.userBlacklist">userBlacklist</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#user_blacklist AuthServerPolicyRule#user_blacklist}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.userWhitelist">userWhitelist</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#user_whitelist AuthServerPolicyRule#user_whitelist}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authServerId`<sup>Required</sup> <a name="authServerId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.authServerId"></a>

```java
public java.lang.String getAuthServerId();
```

- *Type:* java.lang.String

Auth server ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#auth_server_id AuthServerPolicyRule#auth_server_id}

---

##### `grantTypeWhitelist`<sup>Required</sup> <a name="grantTypeWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.grantTypeWhitelist"></a>

```java
public java.util.List<java.lang.String> getGrantTypeWhitelist();
```

- *Type:* java.util.List<java.lang.String>

Accepted grant type values: authorization_code, implicit, password, client_credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#grant_type_whitelist AuthServerPolicyRule#grant_type_whitelist}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Auth server policy rule name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#name AuthServerPolicyRule#name}

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

Auth server policy ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#policy_id AuthServerPolicyRule#policy_id}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Priority of the auth server policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#priority AuthServerPolicyRule#priority}

---

##### `accessTokenLifetimeMinutes`<sup>Optional</sup> <a name="accessTokenLifetimeMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.accessTokenLifetimeMinutes"></a>

```java
public java.lang.Number getAccessTokenLifetimeMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#access_token_lifetime_minutes AuthServerPolicyRule#access_token_lifetime_minutes}.

---

##### `groupBlacklist`<sup>Optional</sup> <a name="groupBlacklist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.groupBlacklist"></a>

```java
public java.util.List<java.lang.String> getGroupBlacklist();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#group_blacklist AuthServerPolicyRule#group_blacklist}.

---

##### `groupWhitelist`<sup>Optional</sup> <a name="groupWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.groupWhitelist"></a>

```java
public java.util.List<java.lang.String> getGroupWhitelist();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#group_whitelist AuthServerPolicyRule#group_whitelist}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#id AuthServerPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inlineHookId`<sup>Optional</sup> <a name="inlineHookId" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.inlineHookId"></a>

```java
public java.lang.String getInlineHookId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#inline_hook_id AuthServerPolicyRule#inline_hook_id}.

---

##### `refreshTokenLifetimeMinutes`<sup>Optional</sup> <a name="refreshTokenLifetimeMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.refreshTokenLifetimeMinutes"></a>

```java
public java.lang.Number getRefreshTokenLifetimeMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#refresh_token_lifetime_minutes AuthServerPolicyRule#refresh_token_lifetime_minutes}.

---

##### `refreshTokenWindowMinutes`<sup>Optional</sup> <a name="refreshTokenWindowMinutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.refreshTokenWindowMinutes"></a>

```java
public java.lang.Number getRefreshTokenWindowMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#refresh_token_window_minutes AuthServerPolicyRule#refresh_token_window_minutes}.

---

##### `scopeWhitelist`<sup>Optional</sup> <a name="scopeWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.scopeWhitelist"></a>

```java
public java.util.List<java.lang.String> getScopeWhitelist();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#scope_whitelist AuthServerPolicyRule#scope_whitelist}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#status AuthServerPolicyRule#status}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Auth server policy rule type, unlikely this will be anything other then the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#type AuthServerPolicyRule#type}

---

##### `userBlacklist`<sup>Optional</sup> <a name="userBlacklist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.userBlacklist"></a>

```java
public java.util.List<java.lang.String> getUserBlacklist();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#user_blacklist AuthServerPolicyRule#user_blacklist}.

---

##### `userWhitelist`<sup>Optional</sup> <a name="userWhitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.userWhitelist"></a>

```java
public java.util.List<java.lang.String> getUserWhitelist();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/auth_server_policy_rule#user_whitelist AuthServerPolicyRule#user_whitelist}.

---



