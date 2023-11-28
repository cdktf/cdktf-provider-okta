# `authServerPolicyRule` Submodule <a name="`authServerPolicyRule` Submodule" id="@cdktf/provider-okta.authServerPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthServerPolicyRule <a name="AuthServerPolicyRule" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule okta_auth_server_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import auth_server_policy_rule

authServerPolicyRule.AuthServerPolicyRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auth_server_id: str,
  grant_type_whitelist: typing.List[str],
  name: str,
  policy_id: str,
  priority: typing.Union[int, float],
  access_token_lifetime_minutes: typing.Union[int, float] = None,
  group_blacklist: typing.List[str] = None,
  group_whitelist: typing.List[str] = None,
  id: str = None,
  inline_hook_id: str = None,
  refresh_token_lifetime_minutes: typing.Union[int, float] = None,
  refresh_token_window_minutes: typing.Union[int, float] = None,
  scope_whitelist: typing.List[str] = None,
  status: str = None,
  type: str = None,
  user_blacklist: typing.List[str] = None,
  user_whitelist: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.authServerId">auth_server_id</a></code> | <code>str</code> | Auth server ID. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.grantTypeWhitelist">grant_type_whitelist</a></code> | <code>typing.List[str]</code> | Accepted grant type values: authorization_code, implicit, password, client_credentials. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Auth server policy rule name. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.policyId">policy_id</a></code> | <code>str</code> | Auth server policy ID. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Priority of the auth server policy rule. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.accessTokenLifetimeMinutes">access_token_lifetime_minutes</a></code> | <code>typing.Union[int, float]</code> | Lifetime of access token. Can be set to a value between 5 and 1440 minutes. Default is `60`. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.groupBlacklist">group_blacklist</a></code> | <code>typing.List[str]</code> | Specifies a set of Groups whose Users are to be excluded. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.groupWhitelist">group_whitelist</a></code> | <code>typing.List[str]</code> | Specifies a set of Groups whose Users are to be included. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#id AuthServerPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.inlineHookId">inline_hook_id</a></code> | <code>str</code> | The ID of the inline token to trigger. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.refreshTokenLifetimeMinutes">refresh_token_lifetime_minutes</a></code> | <code>typing.Union[int, float]</code> | Lifetime of refresh token. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.refreshTokenWindowMinutes">refresh_token_window_minutes</a></code> | <code>typing.Union[int, float]</code> | Window in which a refresh token can be used. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.scopeWhitelist">scope_whitelist</a></code> | <code>typing.List[str]</code> | Scopes allowed for this policy rule. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#status AuthServerPolicyRule#status}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.type">type</a></code> | <code>str</code> | Auth server policy rule type, unlikely this will be anything other then the default. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.userBlacklist">user_blacklist</a></code> | <code>typing.List[str]</code> | Specifies a set of Users to be excluded. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.userWhitelist">user_whitelist</a></code> | <code>typing.List[str]</code> | Specifies a set of Users to be included. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_server_id`<sup>Required</sup> <a name="auth_server_id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.authServerId"></a>

- *Type:* str

Auth server ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#auth_server_id AuthServerPolicyRule#auth_server_id}

---

##### `grant_type_whitelist`<sup>Required</sup> <a name="grant_type_whitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.grantTypeWhitelist"></a>

- *Type:* typing.List[str]

Accepted grant type values: authorization_code, implicit, password, client_credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#grant_type_whitelist AuthServerPolicyRule#grant_type_whitelist}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.name"></a>

- *Type:* str

Auth server policy rule name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#name AuthServerPolicyRule#name}

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.policyId"></a>

- *Type:* str

Auth server policy ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#policy_id AuthServerPolicyRule#policy_id}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Priority of the auth server policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#priority AuthServerPolicyRule#priority}

---

##### `access_token_lifetime_minutes`<sup>Optional</sup> <a name="access_token_lifetime_minutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.accessTokenLifetimeMinutes"></a>

- *Type:* typing.Union[int, float]

Lifetime of access token. Can be set to a value between 5 and 1440 minutes. Default is `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#access_token_lifetime_minutes AuthServerPolicyRule#access_token_lifetime_minutes}

---

##### `group_blacklist`<sup>Optional</sup> <a name="group_blacklist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.groupBlacklist"></a>

- *Type:* typing.List[str]

Specifies a set of Groups whose Users are to be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#group_blacklist AuthServerPolicyRule#group_blacklist}

---

##### `group_whitelist`<sup>Optional</sup> <a name="group_whitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.groupWhitelist"></a>

- *Type:* typing.List[str]

Specifies a set of Groups whose Users are to be included.

Can be set to Group ID or to the following: `EVERYONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#group_whitelist AuthServerPolicyRule#group_whitelist}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#id AuthServerPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inline_hook_id`<sup>Optional</sup> <a name="inline_hook_id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.inlineHookId"></a>

- *Type:* str

The ID of the inline token to trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#inline_hook_id AuthServerPolicyRule#inline_hook_id}

---

##### `refresh_token_lifetime_minutes`<sup>Optional</sup> <a name="refresh_token_lifetime_minutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.refreshTokenLifetimeMinutes"></a>

- *Type:* typing.Union[int, float]

Lifetime of refresh token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#refresh_token_lifetime_minutes AuthServerPolicyRule#refresh_token_lifetime_minutes}

---

##### `refresh_token_window_minutes`<sup>Optional</sup> <a name="refresh_token_window_minutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.refreshTokenWindowMinutes"></a>

- *Type:* typing.Union[int, float]

Window in which a refresh token can be used.

It can be a value between 5 and 2628000 (5 years) minutes. Default is `10080` (7 days).`refresh_token_window_minutes` must be between `access_token_lifetime_minutes` and `refresh_token_lifetime_minutes`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#refresh_token_window_minutes AuthServerPolicyRule#refresh_token_window_minutes}

---

##### `scope_whitelist`<sup>Optional</sup> <a name="scope_whitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.scopeWhitelist"></a>

- *Type:* typing.List[str]

Scopes allowed for this policy rule.

They can be whitelisted by name or all can be whitelisted with `*`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#scope_whitelist AuthServerPolicyRule#scope_whitelist}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#status AuthServerPolicyRule#status}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.type"></a>

- *Type:* str

Auth server policy rule type, unlikely this will be anything other then the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#type AuthServerPolicyRule#type}

---

##### `user_blacklist`<sup>Optional</sup> <a name="user_blacklist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.userBlacklist"></a>

- *Type:* typing.List[str]

Specifies a set of Users to be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#user_blacklist AuthServerPolicyRule#user_blacklist}

---

##### `user_whitelist`<sup>Optional</sup> <a name="user_whitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.Initializer.parameter.userWhitelist"></a>

- *Type:* typing.List[str]

Specifies a set of Users to be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#user_whitelist AuthServerPolicyRule#user_whitelist}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetAccessTokenLifetimeMinutes">reset_access_token_lifetime_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetGroupBlacklist">reset_group_blacklist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetGroupWhitelist">reset_group_whitelist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetInlineHookId">reset_inline_hook_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetRefreshTokenLifetimeMinutes">reset_refresh_token_lifetime_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetRefreshTokenWindowMinutes">reset_refresh_token_window_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetScopeWhitelist">reset_scope_whitelist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetUserBlacklist">reset_user_blacklist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetUserWhitelist">reset_user_whitelist</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `reset_access_token_lifetime_minutes` <a name="reset_access_token_lifetime_minutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetAccessTokenLifetimeMinutes"></a>

```python
def reset_access_token_lifetime_minutes() -> None
```

##### `reset_group_blacklist` <a name="reset_group_blacklist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetGroupBlacklist"></a>

```python
def reset_group_blacklist() -> None
```

##### `reset_group_whitelist` <a name="reset_group_whitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetGroupWhitelist"></a>

```python
def reset_group_whitelist() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_inline_hook_id` <a name="reset_inline_hook_id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetInlineHookId"></a>

```python
def reset_inline_hook_id() -> None
```

##### `reset_refresh_token_lifetime_minutes` <a name="reset_refresh_token_lifetime_minutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetRefreshTokenLifetimeMinutes"></a>

```python
def reset_refresh_token_lifetime_minutes() -> None
```

##### `reset_refresh_token_window_minutes` <a name="reset_refresh_token_window_minutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetRefreshTokenWindowMinutes"></a>

```python
def reset_refresh_token_window_minutes() -> None
```

##### `reset_scope_whitelist` <a name="reset_scope_whitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetScopeWhitelist"></a>

```python
def reset_scope_whitelist() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_user_blacklist` <a name="reset_user_blacklist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetUserBlacklist"></a>

```python
def reset_user_blacklist() -> None
```

##### `reset_user_whitelist` <a name="reset_user_whitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.resetUserWhitelist"></a>

```python
def reset_user_whitelist() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AuthServerPolicyRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import auth_server_policy_rule

authServerPolicyRule.AuthServerPolicyRule.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import auth_server_policy_rule

authServerPolicyRule.AuthServerPolicyRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import auth_server_policy_rule

authServerPolicyRule.AuthServerPolicyRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import auth_server_policy_rule

authServerPolicyRule.AuthServerPolicyRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AuthServerPolicyRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AuthServerPolicyRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AuthServerPolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AuthServerPolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.systemAttribute">system_attribute</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.accessTokenLifetimeMinutesInput">access_token_lifetime_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.authServerIdInput">auth_server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.grantTypeWhitelistInput">grant_type_whitelist_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupBlacklistInput">group_blacklist_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupWhitelistInput">group_whitelist_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.inlineHookIdInput">inline_hook_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenLifetimeMinutesInput">refresh_token_lifetime_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenWindowMinutesInput">refresh_token_window_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.scopeWhitelistInput">scope_whitelist_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userBlacklistInput">user_blacklist_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userWhitelistInput">user_whitelist_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.accessTokenLifetimeMinutes">access_token_lifetime_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.authServerId">auth_server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.grantTypeWhitelist">grant_type_whitelist</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupBlacklist">group_blacklist</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupWhitelist">group_whitelist</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.inlineHookId">inline_hook_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenLifetimeMinutes">refresh_token_lifetime_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenWindowMinutes">refresh_token_window_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.scopeWhitelist">scope_whitelist</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userBlacklist">user_blacklist</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userWhitelist">user_whitelist</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `system_attribute`<sup>Required</sup> <a name="system_attribute" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.systemAttribute"></a>

```python
system_attribute: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `access_token_lifetime_minutes_input`<sup>Optional</sup> <a name="access_token_lifetime_minutes_input" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.accessTokenLifetimeMinutesInput"></a>

```python
access_token_lifetime_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auth_server_id_input`<sup>Optional</sup> <a name="auth_server_id_input" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.authServerIdInput"></a>

```python
auth_server_id_input: str
```

- *Type:* str

---

##### `grant_type_whitelist_input`<sup>Optional</sup> <a name="grant_type_whitelist_input" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.grantTypeWhitelistInput"></a>

```python
grant_type_whitelist_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group_blacklist_input`<sup>Optional</sup> <a name="group_blacklist_input" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupBlacklistInput"></a>

```python
group_blacklist_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group_whitelist_input`<sup>Optional</sup> <a name="group_whitelist_input" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupWhitelistInput"></a>

```python
group_whitelist_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `inline_hook_id_input`<sup>Optional</sup> <a name="inline_hook_id_input" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.inlineHookIdInput"></a>

```python
inline_hook_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `refresh_token_lifetime_minutes_input`<sup>Optional</sup> <a name="refresh_token_lifetime_minutes_input" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenLifetimeMinutesInput"></a>

```python
refresh_token_lifetime_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `refresh_token_window_minutes_input`<sup>Optional</sup> <a name="refresh_token_window_minutes_input" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenWindowMinutesInput"></a>

```python
refresh_token_window_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scope_whitelist_input`<sup>Optional</sup> <a name="scope_whitelist_input" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.scopeWhitelistInput"></a>

```python
scope_whitelist_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `user_blacklist_input`<sup>Optional</sup> <a name="user_blacklist_input" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userBlacklistInput"></a>

```python
user_blacklist_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_whitelist_input`<sup>Optional</sup> <a name="user_whitelist_input" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userWhitelistInput"></a>

```python
user_whitelist_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `access_token_lifetime_minutes`<sup>Required</sup> <a name="access_token_lifetime_minutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.accessTokenLifetimeMinutes"></a>

```python
access_token_lifetime_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auth_server_id`<sup>Required</sup> <a name="auth_server_id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.authServerId"></a>

```python
auth_server_id: str
```

- *Type:* str

---

##### `grant_type_whitelist`<sup>Required</sup> <a name="grant_type_whitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.grantTypeWhitelist"></a>

```python
grant_type_whitelist: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group_blacklist`<sup>Required</sup> <a name="group_blacklist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupBlacklist"></a>

```python
group_blacklist: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group_whitelist`<sup>Required</sup> <a name="group_whitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.groupWhitelist"></a>

```python
group_whitelist: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inline_hook_id`<sup>Required</sup> <a name="inline_hook_id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.inlineHookId"></a>

```python
inline_hook_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `refresh_token_lifetime_minutes`<sup>Required</sup> <a name="refresh_token_lifetime_minutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenLifetimeMinutes"></a>

```python
refresh_token_lifetime_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `refresh_token_window_minutes`<sup>Required</sup> <a name="refresh_token_window_minutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.refreshTokenWindowMinutes"></a>

```python
refresh_token_window_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scope_whitelist`<sup>Required</sup> <a name="scope_whitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.scopeWhitelist"></a>

```python
scope_whitelist: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user_blacklist`<sup>Required</sup> <a name="user_blacklist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userBlacklist"></a>

```python
user_blacklist: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_whitelist`<sup>Required</sup> <a name="user_whitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.userWhitelist"></a>

```python
user_whitelist: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AuthServerPolicyRuleConfig <a name="AuthServerPolicyRuleConfig" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import auth_server_policy_rule

authServerPolicyRule.AuthServerPolicyRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auth_server_id: str,
  grant_type_whitelist: typing.List[str],
  name: str,
  policy_id: str,
  priority: typing.Union[int, float],
  access_token_lifetime_minutes: typing.Union[int, float] = None,
  group_blacklist: typing.List[str] = None,
  group_whitelist: typing.List[str] = None,
  id: str = None,
  inline_hook_id: str = None,
  refresh_token_lifetime_minutes: typing.Union[int, float] = None,
  refresh_token_window_minutes: typing.Union[int, float] = None,
  scope_whitelist: typing.List[str] = None,
  status: str = None,
  type: str = None,
  user_blacklist: typing.List[str] = None,
  user_whitelist: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.authServerId">auth_server_id</a></code> | <code>str</code> | Auth server ID. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.grantTypeWhitelist">grant_type_whitelist</a></code> | <code>typing.List[str]</code> | Accepted grant type values: authorization_code, implicit, password, client_credentials. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.name">name</a></code> | <code>str</code> | Auth server policy rule name. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.policyId">policy_id</a></code> | <code>str</code> | Auth server policy ID. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Priority of the auth server policy rule. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.accessTokenLifetimeMinutes">access_token_lifetime_minutes</a></code> | <code>typing.Union[int, float]</code> | Lifetime of access token. Can be set to a value between 5 and 1440 minutes. Default is `60`. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.groupBlacklist">group_blacklist</a></code> | <code>typing.List[str]</code> | Specifies a set of Groups whose Users are to be excluded. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.groupWhitelist">group_whitelist</a></code> | <code>typing.List[str]</code> | Specifies a set of Groups whose Users are to be included. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#id AuthServerPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.inlineHookId">inline_hook_id</a></code> | <code>str</code> | The ID of the inline token to trigger. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.refreshTokenLifetimeMinutes">refresh_token_lifetime_minutes</a></code> | <code>typing.Union[int, float]</code> | Lifetime of refresh token. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.refreshTokenWindowMinutes">refresh_token_window_minutes</a></code> | <code>typing.Union[int, float]</code> | Window in which a refresh token can be used. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.scopeWhitelist">scope_whitelist</a></code> | <code>typing.List[str]</code> | Scopes allowed for this policy rule. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#status AuthServerPolicyRule#status}. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.type">type</a></code> | <code>str</code> | Auth server policy rule type, unlikely this will be anything other then the default. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.userBlacklist">user_blacklist</a></code> | <code>typing.List[str]</code> | Specifies a set of Users to be excluded. |
| <code><a href="#@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.userWhitelist">user_whitelist</a></code> | <code>typing.List[str]</code> | Specifies a set of Users to be included. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_server_id`<sup>Required</sup> <a name="auth_server_id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.authServerId"></a>

```python
auth_server_id: str
```

- *Type:* str

Auth server ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#auth_server_id AuthServerPolicyRule#auth_server_id}

---

##### `grant_type_whitelist`<sup>Required</sup> <a name="grant_type_whitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.grantTypeWhitelist"></a>

```python
grant_type_whitelist: typing.List[str]
```

- *Type:* typing.List[str]

Accepted grant type values: authorization_code, implicit, password, client_credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#grant_type_whitelist AuthServerPolicyRule#grant_type_whitelist}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Auth server policy rule name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#name AuthServerPolicyRule#name}

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

Auth server policy ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#policy_id AuthServerPolicyRule#policy_id}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Priority of the auth server policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#priority AuthServerPolicyRule#priority}

---

##### `access_token_lifetime_minutes`<sup>Optional</sup> <a name="access_token_lifetime_minutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.accessTokenLifetimeMinutes"></a>

```python
access_token_lifetime_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Lifetime of access token. Can be set to a value between 5 and 1440 minutes. Default is `60`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#access_token_lifetime_minutes AuthServerPolicyRule#access_token_lifetime_minutes}

---

##### `group_blacklist`<sup>Optional</sup> <a name="group_blacklist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.groupBlacklist"></a>

```python
group_blacklist: typing.List[str]
```

- *Type:* typing.List[str]

Specifies a set of Groups whose Users are to be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#group_blacklist AuthServerPolicyRule#group_blacklist}

---

##### `group_whitelist`<sup>Optional</sup> <a name="group_whitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.groupWhitelist"></a>

```python
group_whitelist: typing.List[str]
```

- *Type:* typing.List[str]

Specifies a set of Groups whose Users are to be included.

Can be set to Group ID or to the following: `EVERYONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#group_whitelist AuthServerPolicyRule#group_whitelist}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#id AuthServerPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inline_hook_id`<sup>Optional</sup> <a name="inline_hook_id" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.inlineHookId"></a>

```python
inline_hook_id: str
```

- *Type:* str

The ID of the inline token to trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#inline_hook_id AuthServerPolicyRule#inline_hook_id}

---

##### `refresh_token_lifetime_minutes`<sup>Optional</sup> <a name="refresh_token_lifetime_minutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.refreshTokenLifetimeMinutes"></a>

```python
refresh_token_lifetime_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Lifetime of refresh token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#refresh_token_lifetime_minutes AuthServerPolicyRule#refresh_token_lifetime_minutes}

---

##### `refresh_token_window_minutes`<sup>Optional</sup> <a name="refresh_token_window_minutes" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.refreshTokenWindowMinutes"></a>

```python
refresh_token_window_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Window in which a refresh token can be used.

It can be a value between 5 and 2628000 (5 years) minutes. Default is `10080` (7 days).`refresh_token_window_minutes` must be between `access_token_lifetime_minutes` and `refresh_token_lifetime_minutes`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#refresh_token_window_minutes AuthServerPolicyRule#refresh_token_window_minutes}

---

##### `scope_whitelist`<sup>Optional</sup> <a name="scope_whitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.scopeWhitelist"></a>

```python
scope_whitelist: typing.List[str]
```

- *Type:* typing.List[str]

Scopes allowed for this policy rule.

They can be whitelisted by name or all can be whitelisted with `*`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#scope_whitelist AuthServerPolicyRule#scope_whitelist}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#status AuthServerPolicyRule#status}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Auth server policy rule type, unlikely this will be anything other then the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#type AuthServerPolicyRule#type}

---

##### `user_blacklist`<sup>Optional</sup> <a name="user_blacklist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.userBlacklist"></a>

```python
user_blacklist: typing.List[str]
```

- *Type:* typing.List[str]

Specifies a set of Users to be excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#user_blacklist AuthServerPolicyRule#user_blacklist}

---

##### `user_whitelist`<sup>Optional</sup> <a name="user_whitelist" id="@cdktf/provider-okta.authServerPolicyRule.AuthServerPolicyRuleConfig.property.userWhitelist"></a>

```python
user_whitelist: typing.List[str]
```

- *Type:* typing.List[str]

Specifies a set of Users to be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/resources/auth_server_policy_rule#user_whitelist AuthServerPolicyRule#user_whitelist}

---



