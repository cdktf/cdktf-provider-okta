# `policyRuleMfa` Submodule <a name="`policyRuleMfa` Submodule" id="@cdktf/provider-okta.policyRuleMfa"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyRuleMfa <a name="PolicyRuleMfa" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa okta_policy_rule_mfa}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_mfa

policyRuleMfa.PolicyRuleMfa(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  app_exclude: typing.Union[IResolvable, typing.List[PolicyRuleMfaAppExclude]] = None,
  app_include: typing.Union[IResolvable, typing.List[PolicyRuleMfaAppInclude]] = None,
  enroll: str = None,
  id: str = None,
  network_connection: str = None,
  network_excludes: typing.List[str] = None,
  network_includes: typing.List[str] = None,
  policy_id: str = None,
  priority: typing.Union[int, float] = None,
  status: str = None,
  users_excluded: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.name">name</a></code> | <code>str</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.appExclude">app_exclude</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude">PolicyRuleMfaAppExclude</a>]]</code> | app_exclude block. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.appInclude">app_include</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude">PolicyRuleMfaAppInclude</a>]]</code> | app_include block. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.enroll">enroll</a></code> | <code>str</code> | When a user should be prompted for MFA. It can be `CHALLENGE`, `LOGIN`, or `NEVER`. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#id PolicyRuleMfa#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.networkConnection">network_connection</a></code> | <code>str</code> | Network selection mode: `ANYWHERE`, `ZONE`, `ON_NETWORK`, or `OFF_NETWORK`. Default: `ANYWHERE`. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.networkExcludes">network_excludes</a></code> | <code>typing.List[str]</code> | Required if `network_connection` = `ZONE`. Indicates the network zones to exclude. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.networkIncludes">network_includes</a></code> | <code>typing.List[str]</code> | Required if `network_connection` = `ZONE`. Indicates the network zones to include. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.policyId">policy_id</a></code> | <code>str</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Rule priority. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.status">status</a></code> | <code>str</code> | Policy Rule Status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.usersExcluded">users_excluded</a></code> | <code>typing.List[str]</code> | Set of User IDs to Exclude. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.name"></a>

- *Type:* str

Policy Rule Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#name PolicyRuleMfa#name}

---

##### `app_exclude`<sup>Optional</sup> <a name="app_exclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.appExclude"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude">PolicyRuleMfaAppExclude</a>]]

app_exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#app_exclude PolicyRuleMfa#app_exclude}

---

##### `app_include`<sup>Optional</sup> <a name="app_include" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.appInclude"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude">PolicyRuleMfaAppInclude</a>]]

app_include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#app_include PolicyRuleMfa#app_include}

---

##### `enroll`<sup>Optional</sup> <a name="enroll" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.enroll"></a>

- *Type:* str

When a user should be prompted for MFA. It can be `CHALLENGE`, `LOGIN`, or `NEVER`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#enroll PolicyRuleMfa#enroll}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#id PolicyRuleMfa#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network_connection`<sup>Optional</sup> <a name="network_connection" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.networkConnection"></a>

- *Type:* str

Network selection mode: `ANYWHERE`, `ZONE`, `ON_NETWORK`, or `OFF_NETWORK`. Default: `ANYWHERE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#network_connection PolicyRuleMfa#network_connection}

---

##### `network_excludes`<sup>Optional</sup> <a name="network_excludes" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.networkExcludes"></a>

- *Type:* typing.List[str]

Required if `network_connection` = `ZONE`. Indicates the network zones to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#network_excludes PolicyRuleMfa#network_excludes}

---

##### `network_includes`<sup>Optional</sup> <a name="network_includes" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.networkIncludes"></a>

- *Type:* typing.List[str]

Required if `network_connection` = `ZONE`. Indicates the network zones to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#network_includes PolicyRuleMfa#network_includes}

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.policyId"></a>

- *Type:* str

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#policy_id PolicyRuleMfa#policy_id}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Rule priority.

This attribute can be set to a valid priority. To avoid an endless diff situation an error is thrown if an invalid property is provided. The Okta API defaults to the last (lowest) if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#priority PolicyRuleMfa#priority}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.status"></a>

- *Type:* str

Policy Rule Status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#status PolicyRuleMfa#status}

---

##### `users_excluded`<sup>Optional</sup> <a name="users_excluded" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.Initializer.parameter.usersExcluded"></a>

- *Type:* typing.List[str]

Set of User IDs to Exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#users_excluded PolicyRuleMfa#users_excluded}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.putAppExclude">put_app_exclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.putAppInclude">put_app_include</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetAppExclude">reset_app_exclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetAppInclude">reset_app_include</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetEnroll">reset_enroll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetNetworkConnection">reset_network_connection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetNetworkExcludes">reset_network_excludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetNetworkIncludes">reset_network_includes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetPolicyId">reset_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetUsersExcluded">reset_users_excluded</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_app_exclude` <a name="put_app_exclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.putAppExclude"></a>

```python
def put_app_exclude(
  value: typing.Union[IResolvable, typing.List[PolicyRuleMfaAppExclude]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.putAppExclude.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude">PolicyRuleMfaAppExclude</a>]]

---

##### `put_app_include` <a name="put_app_include" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.putAppInclude"></a>

```python
def put_app_include(
  value: typing.Union[IResolvable, typing.List[PolicyRuleMfaAppInclude]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.putAppInclude.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude">PolicyRuleMfaAppInclude</a>]]

---

##### `reset_app_exclude` <a name="reset_app_exclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetAppExclude"></a>

```python
def reset_app_exclude() -> None
```

##### `reset_app_include` <a name="reset_app_include" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetAppInclude"></a>

```python
def reset_app_include() -> None
```

##### `reset_enroll` <a name="reset_enroll" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetEnroll"></a>

```python
def reset_enroll() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_network_connection` <a name="reset_network_connection" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetNetworkConnection"></a>

```python
def reset_network_connection() -> None
```

##### `reset_network_excludes` <a name="reset_network_excludes" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetNetworkExcludes"></a>

```python
def reset_network_excludes() -> None
```

##### `reset_network_includes` <a name="reset_network_includes" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetNetworkIncludes"></a>

```python
def reset_network_includes() -> None
```

##### `reset_policy_id` <a name="reset_policy_id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetPolicyId"></a>

```python
def reset_policy_id() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_users_excluded` <a name="reset_users_excluded" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.resetUsersExcluded"></a>

```python
def reset_users_excluded() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PolicyRuleMfa resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_mfa

policyRuleMfa.PolicyRuleMfa.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_mfa

policyRuleMfa.PolicyRuleMfa.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_mfa

policyRuleMfa.PolicyRuleMfa.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_mfa

policyRuleMfa.PolicyRuleMfa.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PolicyRuleMfa resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PolicyRuleMfa to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PolicyRuleMfa that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PolicyRuleMfa to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.appExclude">app_exclude</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList">PolicyRuleMfaAppExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.appInclude">app_include</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList">PolicyRuleMfaAppIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.appExcludeInput">app_exclude_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude">PolicyRuleMfaAppExclude</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.appIncludeInput">app_include_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude">PolicyRuleMfaAppInclude</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.enrollInput">enroll_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkConnectionInput">network_connection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkExcludesInput">network_excludes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkIncludesInput">network_includes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.usersExcludedInput">users_excluded_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.enroll">enroll</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkConnection">network_connection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkExcludes">network_excludes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkIncludes">network_includes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.usersExcluded">users_excluded</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_exclude`<sup>Required</sup> <a name="app_exclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.appExclude"></a>

```python
app_exclude: PolicyRuleMfaAppExcludeList
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList">PolicyRuleMfaAppExcludeList</a>

---

##### `app_include`<sup>Required</sup> <a name="app_include" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.appInclude"></a>

```python
app_include: PolicyRuleMfaAppIncludeList
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList">PolicyRuleMfaAppIncludeList</a>

---

##### `app_exclude_input`<sup>Optional</sup> <a name="app_exclude_input" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.appExcludeInput"></a>

```python
app_exclude_input: typing.Union[IResolvable, typing.List[PolicyRuleMfaAppExclude]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude">PolicyRuleMfaAppExclude</a>]]

---

##### `app_include_input`<sup>Optional</sup> <a name="app_include_input" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.appIncludeInput"></a>

```python
app_include_input: typing.Union[IResolvable, typing.List[PolicyRuleMfaAppInclude]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude">PolicyRuleMfaAppInclude</a>]]

---

##### `enroll_input`<sup>Optional</sup> <a name="enroll_input" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.enrollInput"></a>

```python
enroll_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_connection_input`<sup>Optional</sup> <a name="network_connection_input" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkConnectionInput"></a>

```python
network_connection_input: str
```

- *Type:* str

---

##### `network_excludes_input`<sup>Optional</sup> <a name="network_excludes_input" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkExcludesInput"></a>

```python
network_excludes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_includes_input`<sup>Optional</sup> <a name="network_includes_input" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkIncludesInput"></a>

```python
network_includes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `users_excluded_input`<sup>Optional</sup> <a name="users_excluded_input" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.usersExcludedInput"></a>

```python
users_excluded_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enroll`<sup>Required</sup> <a name="enroll" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.enroll"></a>

```python
enroll: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_connection`<sup>Required</sup> <a name="network_connection" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkConnection"></a>

```python
network_connection: str
```

- *Type:* str

---

##### `network_excludes`<sup>Required</sup> <a name="network_excludes" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkExcludes"></a>

```python
network_excludes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_includes`<sup>Required</sup> <a name="network_includes" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.networkIncludes"></a>

```python
network_includes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `users_excluded`<sup>Required</sup> <a name="users_excluded" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.usersExcluded"></a>

```python
users_excluded: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfa.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyRuleMfaAppExclude <a name="PolicyRuleMfaAppExclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_mfa

policyRuleMfa.PolicyRuleMfaAppExclude(
  type: str,
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#type PolicyRuleMfa#type}. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#id PolicyRuleMfa#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#name PolicyRuleMfa#name}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#type PolicyRuleMfa#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#id PolicyRuleMfa#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#name PolicyRuleMfa#name}.

---

### PolicyRuleMfaAppInclude <a name="PolicyRuleMfaAppInclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_mfa

policyRuleMfa.PolicyRuleMfaAppInclude(
  type: str,
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#type PolicyRuleMfa#type}. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#id PolicyRuleMfa#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#name PolicyRuleMfa#name}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#type PolicyRuleMfa#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#id PolicyRuleMfa#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#name PolicyRuleMfa#name}.

---

### PolicyRuleMfaConfig <a name="PolicyRuleMfaConfig" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_mfa

policyRuleMfa.PolicyRuleMfaConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  app_exclude: typing.Union[IResolvable, typing.List[PolicyRuleMfaAppExclude]] = None,
  app_include: typing.Union[IResolvable, typing.List[PolicyRuleMfaAppInclude]] = None,
  enroll: str = None,
  id: str = None,
  network_connection: str = None,
  network_excludes: typing.List[str] = None,
  network_includes: typing.List[str] = None,
  policy_id: str = None,
  priority: typing.Union[int, float] = None,
  status: str = None,
  users_excluded: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.name">name</a></code> | <code>str</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.appExclude">app_exclude</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude">PolicyRuleMfaAppExclude</a>]]</code> | app_exclude block. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.appInclude">app_include</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude">PolicyRuleMfaAppInclude</a>]]</code> | app_include block. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.enroll">enroll</a></code> | <code>str</code> | When a user should be prompted for MFA. It can be `CHALLENGE`, `LOGIN`, or `NEVER`. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#id PolicyRuleMfa#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.networkConnection">network_connection</a></code> | <code>str</code> | Network selection mode: `ANYWHERE`, `ZONE`, `ON_NETWORK`, or `OFF_NETWORK`. Default: `ANYWHERE`. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.networkExcludes">network_excludes</a></code> | <code>typing.List[str]</code> | Required if `network_connection` = `ZONE`. Indicates the network zones to exclude. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.networkIncludes">network_includes</a></code> | <code>typing.List[str]</code> | Required if `network_connection` = `ZONE`. Indicates the network zones to include. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.policyId">policy_id</a></code> | <code>str</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Rule priority. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.status">status</a></code> | <code>str</code> | Policy Rule Status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.usersExcluded">users_excluded</a></code> | <code>typing.List[str]</code> | Set of User IDs to Exclude. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Policy Rule Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#name PolicyRuleMfa#name}

---

##### `app_exclude`<sup>Optional</sup> <a name="app_exclude" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.appExclude"></a>

```python
app_exclude: typing.Union[IResolvable, typing.List[PolicyRuleMfaAppExclude]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude">PolicyRuleMfaAppExclude</a>]]

app_exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#app_exclude PolicyRuleMfa#app_exclude}

---

##### `app_include`<sup>Optional</sup> <a name="app_include" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.appInclude"></a>

```python
app_include: typing.Union[IResolvable, typing.List[PolicyRuleMfaAppInclude]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude">PolicyRuleMfaAppInclude</a>]]

app_include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#app_include PolicyRuleMfa#app_include}

---

##### `enroll`<sup>Optional</sup> <a name="enroll" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.enroll"></a>

```python
enroll: str
```

- *Type:* str

When a user should be prompted for MFA. It can be `CHALLENGE`, `LOGIN`, or `NEVER`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#enroll PolicyRuleMfa#enroll}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#id PolicyRuleMfa#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network_connection`<sup>Optional</sup> <a name="network_connection" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.networkConnection"></a>

```python
network_connection: str
```

- *Type:* str

Network selection mode: `ANYWHERE`, `ZONE`, `ON_NETWORK`, or `OFF_NETWORK`. Default: `ANYWHERE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#network_connection PolicyRuleMfa#network_connection}

---

##### `network_excludes`<sup>Optional</sup> <a name="network_excludes" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.networkExcludes"></a>

```python
network_excludes: typing.List[str]
```

- *Type:* typing.List[str]

Required if `network_connection` = `ZONE`. Indicates the network zones to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#network_excludes PolicyRuleMfa#network_excludes}

---

##### `network_includes`<sup>Optional</sup> <a name="network_includes" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.networkIncludes"></a>

```python
network_includes: typing.List[str]
```

- *Type:* typing.List[str]

Required if `network_connection` = `ZONE`. Indicates the network zones to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#network_includes PolicyRuleMfa#network_includes}

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#policy_id PolicyRuleMfa#policy_id}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Rule priority.

This attribute can be set to a valid priority. To avoid an endless diff situation an error is thrown if an invalid property is provided. The Okta API defaults to the last (lowest) if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#priority PolicyRuleMfa#priority}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Policy Rule Status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#status PolicyRuleMfa#status}

---

##### `users_excluded`<sup>Optional</sup> <a name="users_excluded" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaConfig.property.usersExcluded"></a>

```python
users_excluded: typing.List[str]
```

- *Type:* typing.List[str]

Set of User IDs to Exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/resources/policy_rule_mfa#users_excluded PolicyRuleMfa#users_excluded}

---

## Classes <a name="Classes" id="Classes"></a>

### PolicyRuleMfaAppExcludeList <a name="PolicyRuleMfaAppExcludeList" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_mfa

policyRuleMfa.PolicyRuleMfaAppExcludeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PolicyRuleMfaAppExcludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude">PolicyRuleMfaAppExclude</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PolicyRuleMfaAppExclude]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude">PolicyRuleMfaAppExclude</a>]]

---


### PolicyRuleMfaAppExcludeOutputReference <a name="PolicyRuleMfaAppExcludeOutputReference" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_mfa

policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude">PolicyRuleMfaAppExclude</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExcludeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PolicyRuleMfaAppExclude]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppExclude">PolicyRuleMfaAppExclude</a>]

---


### PolicyRuleMfaAppIncludeList <a name="PolicyRuleMfaAppIncludeList" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_mfa

policyRuleMfa.PolicyRuleMfaAppIncludeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PolicyRuleMfaAppIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude">PolicyRuleMfaAppInclude</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PolicyRuleMfaAppInclude]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude">PolicyRuleMfaAppInclude</a>]]

---


### PolicyRuleMfaAppIncludeOutputReference <a name="PolicyRuleMfaAppIncludeOutputReference" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import policy_rule_mfa

policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude">PolicyRuleMfaAppInclude</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppIncludeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PolicyRuleMfaAppInclude]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.policyRuleMfa.PolicyRuleMfaAppInclude">PolicyRuleMfaAppInclude</a>]

---



