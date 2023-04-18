# `okta_password_policy_rule`

Refer to the Terraform Registory for docs: [`okta_password_policy_rule`](https://www.terraform.io/docs/providers/okta/r/password_policy_rule).

# `passwordPolicyRule` Submodule <a name="`passwordPolicyRule` Submodule" id="@cdktf/provider-okta.passwordPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PasswordPolicyRule <a name="PasswordPolicyRule" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule okta_password_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import password_policy_rule

passwordPolicyRule.PasswordPolicyRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  network_connection: str = None,
  network_excludes: typing.List[str] = None,
  network_includes: typing.List[str] = None,
  password_change: str = None,
  password_reset: str = None,
  password_unlock: str = None,
  policyid: str = None,
  policy_id: str = None,
  priority: typing.Union[int, float] = None,
  status: str = None,
  users_excluded: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#id PasswordPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.networkConnection">network_connection</a></code> | <code>str</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.networkExcludes">network_excludes</a></code> | <code>typing.List[str]</code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.networkIncludes">network_includes</a></code> | <code>typing.List[str]</code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.passwordChange">password_change</a></code> | <code>str</code> | Allow or deny a user to change their password: ALLOW or DENY. Default = ALLOW. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.passwordReset">password_reset</a></code> | <code>str</code> | Allow or deny a user to reset their password: ALLOW or DENY. Default = ALLOW. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.passwordUnlock">password_unlock</a></code> | <code>str</code> | Allow or deny a user to unlock. Default = DENY. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.policyid">policyid</a></code> | <code>str</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.policyId">policy_id</a></code> | <code>str</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Policy Rule Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.status">status</a></code> | <code>str</code> | Policy Rule Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.usersExcluded">users_excluded</a></code> | <code>typing.List[str]</code> | Set of User IDs to Exclude. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.name"></a>

- *Type:* str

Policy Rule Name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#name PasswordPolicyRule#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#id PasswordPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network_connection`<sup>Optional</sup> <a name="network_connection" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.networkConnection"></a>

- *Type:* str

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#network_connection PasswordPolicyRule#network_connection}

---

##### `network_excludes`<sup>Optional</sup> <a name="network_excludes" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.networkExcludes"></a>

- *Type:* typing.List[str]

The zones to exclude.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#network_excludes PasswordPolicyRule#network_excludes}

---

##### `network_includes`<sup>Optional</sup> <a name="network_includes" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.networkIncludes"></a>

- *Type:* typing.List[str]

The zones to include.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#network_includes PasswordPolicyRule#network_includes}

---

##### `password_change`<sup>Optional</sup> <a name="password_change" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.passwordChange"></a>

- *Type:* str

Allow or deny a user to change their password: ALLOW or DENY. Default = ALLOW.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#password_change PasswordPolicyRule#password_change}

---

##### `password_reset`<sup>Optional</sup> <a name="password_reset" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.passwordReset"></a>

- *Type:* str

Allow or deny a user to reset their password: ALLOW or DENY. Default = ALLOW.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#password_reset PasswordPolicyRule#password_reset}

---

##### `password_unlock`<sup>Optional</sup> <a name="password_unlock" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.passwordUnlock"></a>

- *Type:* str

Allow or deny a user to unlock. Default = DENY.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#password_unlock PasswordPolicyRule#password_unlock}

---

##### `policyid`<sup>Optional</sup> <a name="policyid" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.policyid"></a>

- *Type:* str

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#policyid PasswordPolicyRule#policyid}

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.policyId"></a>

- *Type:* str

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#policy_id PasswordPolicyRule#policy_id}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Policy Rule Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#priority PasswordPolicyRule#priority}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.status"></a>

- *Type:* str

Policy Rule Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#status PasswordPolicyRule#status}

---

##### `users_excluded`<sup>Optional</sup> <a name="users_excluded" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.usersExcluded"></a>

- *Type:* typing.List[str]

Set of User IDs to Exclude.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#users_excluded PasswordPolicyRule#users_excluded}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetNetworkConnection">reset_network_connection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetNetworkExcludes">reset_network_excludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetNetworkIncludes">reset_network_includes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPasswordChange">reset_password_change</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPasswordReset">reset_password_reset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPasswordUnlock">reset_password_unlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPolicyid">reset_policyid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPolicyId">reset_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetUsersExcluded">reset_users_excluded</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_network_connection` <a name="reset_network_connection" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetNetworkConnection"></a>

```python
def reset_network_connection() -> None
```

##### `reset_network_excludes` <a name="reset_network_excludes" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetNetworkExcludes"></a>

```python
def reset_network_excludes() -> None
```

##### `reset_network_includes` <a name="reset_network_includes" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetNetworkIncludes"></a>

```python
def reset_network_includes() -> None
```

##### `reset_password_change` <a name="reset_password_change" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPasswordChange"></a>

```python
def reset_password_change() -> None
```

##### `reset_password_reset` <a name="reset_password_reset" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPasswordReset"></a>

```python
def reset_password_reset() -> None
```

##### `reset_password_unlock` <a name="reset_password_unlock" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPasswordUnlock"></a>

```python
def reset_password_unlock() -> None
```

##### `reset_policyid` <a name="reset_policyid" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPolicyid"></a>

```python
def reset_policyid() -> None
```

##### `reset_policy_id` <a name="reset_policy_id" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPolicyId"></a>

```python
def reset_policy_id() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_users_excluded` <a name="reset_users_excluded" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetUsersExcluded"></a>

```python
def reset_users_excluded() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import password_policy_rule

passwordPolicyRule.PasswordPolicyRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import password_policy_rule

passwordPolicyRule.PasswordPolicyRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import password_policy_rule

passwordPolicyRule.PasswordPolicyRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkConnectionInput">network_connection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkExcludesInput">network_excludes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkIncludesInput">network_includes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordChangeInput">password_change_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordResetInput">password_reset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordUnlockInput">password_unlock_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.policyidInput">policyid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.usersExcludedInput">users_excluded_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkConnection">network_connection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkExcludes">network_excludes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkIncludes">network_includes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordChange">password_change</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordReset">password_reset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordUnlock">password_unlock</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.policyid">policyid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.usersExcluded">users_excluded</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_connection_input`<sup>Optional</sup> <a name="network_connection_input" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkConnectionInput"></a>

```python
network_connection_input: str
```

- *Type:* str

---

##### `network_excludes_input`<sup>Optional</sup> <a name="network_excludes_input" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkExcludesInput"></a>

```python
network_excludes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_includes_input`<sup>Optional</sup> <a name="network_includes_input" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkIncludesInput"></a>

```python
network_includes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `password_change_input`<sup>Optional</sup> <a name="password_change_input" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordChangeInput"></a>

```python
password_change_input: str
```

- *Type:* str

---

##### `password_reset_input`<sup>Optional</sup> <a name="password_reset_input" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordResetInput"></a>

```python
password_reset_input: str
```

- *Type:* str

---

##### `password_unlock_input`<sup>Optional</sup> <a name="password_unlock_input" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordUnlockInput"></a>

```python
password_unlock_input: str
```

- *Type:* str

---

##### `policyid_input`<sup>Optional</sup> <a name="policyid_input" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.policyidInput"></a>

```python
policyid_input: str
```

- *Type:* str

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `users_excluded_input`<sup>Optional</sup> <a name="users_excluded_input" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.usersExcludedInput"></a>

```python
users_excluded_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_connection`<sup>Required</sup> <a name="network_connection" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkConnection"></a>

```python
network_connection: str
```

- *Type:* str

---

##### `network_excludes`<sup>Required</sup> <a name="network_excludes" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkExcludes"></a>

```python
network_excludes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_includes`<sup>Required</sup> <a name="network_includes" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkIncludes"></a>

```python
network_includes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `password_change`<sup>Required</sup> <a name="password_change" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordChange"></a>

```python
password_change: str
```

- *Type:* str

---

##### `password_reset`<sup>Required</sup> <a name="password_reset" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordReset"></a>

```python
password_reset: str
```

- *Type:* str

---

##### `password_unlock`<sup>Required</sup> <a name="password_unlock" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordUnlock"></a>

```python
password_unlock: str
```

- *Type:* str

---

##### `policyid`<sup>Required</sup> <a name="policyid" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.policyid"></a>

```python
policyid: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `users_excluded`<sup>Required</sup> <a name="users_excluded" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.usersExcluded"></a>

```python
users_excluded: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PasswordPolicyRuleConfig <a name="PasswordPolicyRuleConfig" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import password_policy_rule

passwordPolicyRule.PasswordPolicyRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  network_connection: str = None,
  network_excludes: typing.List[str] = None,
  network_includes: typing.List[str] = None,
  password_change: str = None,
  password_reset: str = None,
  password_unlock: str = None,
  policyid: str = None,
  policy_id: str = None,
  priority: typing.Union[int, float] = None,
  status: str = None,
  users_excluded: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.name">name</a></code> | <code>str</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#id PasswordPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.networkConnection">network_connection</a></code> | <code>str</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.networkExcludes">network_excludes</a></code> | <code>typing.List[str]</code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.networkIncludes">network_includes</a></code> | <code>typing.List[str]</code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.passwordChange">password_change</a></code> | <code>str</code> | Allow or deny a user to change their password: ALLOW or DENY. Default = ALLOW. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.passwordReset">password_reset</a></code> | <code>str</code> | Allow or deny a user to reset their password: ALLOW or DENY. Default = ALLOW. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.passwordUnlock">password_unlock</a></code> | <code>str</code> | Allow or deny a user to unlock. Default = DENY. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.policyid">policyid</a></code> | <code>str</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.policyId">policy_id</a></code> | <code>str</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Policy Rule Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.status">status</a></code> | <code>str</code> | Policy Rule Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.usersExcluded">users_excluded</a></code> | <code>typing.List[str]</code> | Set of User IDs to Exclude. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Policy Rule Name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#name PasswordPolicyRule#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#id PasswordPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network_connection`<sup>Optional</sup> <a name="network_connection" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.networkConnection"></a>

```python
network_connection: str
```

- *Type:* str

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#network_connection PasswordPolicyRule#network_connection}

---

##### `network_excludes`<sup>Optional</sup> <a name="network_excludes" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.networkExcludes"></a>

```python
network_excludes: typing.List[str]
```

- *Type:* typing.List[str]

The zones to exclude.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#network_excludes PasswordPolicyRule#network_excludes}

---

##### `network_includes`<sup>Optional</sup> <a name="network_includes" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.networkIncludes"></a>

```python
network_includes: typing.List[str]
```

- *Type:* typing.List[str]

The zones to include.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#network_includes PasswordPolicyRule#network_includes}

---

##### `password_change`<sup>Optional</sup> <a name="password_change" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.passwordChange"></a>

```python
password_change: str
```

- *Type:* str

Allow or deny a user to change their password: ALLOW or DENY. Default = ALLOW.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#password_change PasswordPolicyRule#password_change}

---

##### `password_reset`<sup>Optional</sup> <a name="password_reset" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.passwordReset"></a>

```python
password_reset: str
```

- *Type:* str

Allow or deny a user to reset their password: ALLOW or DENY. Default = ALLOW.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#password_reset PasswordPolicyRule#password_reset}

---

##### `password_unlock`<sup>Optional</sup> <a name="password_unlock" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.passwordUnlock"></a>

```python
password_unlock: str
```

- *Type:* str

Allow or deny a user to unlock. Default = DENY.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#password_unlock PasswordPolicyRule#password_unlock}

---

##### `policyid`<sup>Optional</sup> <a name="policyid" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.policyid"></a>

```python
policyid: str
```

- *Type:* str

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#policyid PasswordPolicyRule#policyid}

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#policy_id PasswordPolicyRule#policy_id}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Policy Rule Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#priority PasswordPolicyRule#priority}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Policy Rule Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#status PasswordPolicyRule#status}

---

##### `users_excluded`<sup>Optional</sup> <a name="users_excluded" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.usersExcluded"></a>

```python
users_excluded: typing.List[str]
```

- *Type:* typing.List[str]

Set of User IDs to Exclude.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/password_policy_rule#users_excluded PasswordPolicyRule#users_excluded}

---



