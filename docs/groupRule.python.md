# `groupRule` Submodule <a name="`groupRule` Submodule" id="@cdktf/provider-okta.groupRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroupRule <a name="GroupRule" id="@cdktf/provider-okta.groupRule.GroupRule"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/group_rule okta_group_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.groupRule.GroupRule.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import group_rule

groupRule.GroupRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  expression_value: str,
  group_assignments: typing.List[str],
  name: str,
  expression_type: str = None,
  id: str = None,
  remove_assigned_users: typing.Union[bool, IResolvable] = None,
  status: str = None,
  users_excluded: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.expressionValue">expression_value</a></code> | <code>str</code> | The expression value. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.groupAssignments">group_assignments</a></code> | <code>typing.List[str]</code> | The list of group ids to assign the users to. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Group Rule (min character 1; max characters 50). |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.expressionType">expression_type</a></code> | <code>str</code> | The expression type to use to invoke the rule. The default is `urn:okta:expression:1.0`. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/group_rule#id GroupRule#id}. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.removeAssignedUsers">remove_assigned_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Remove users added by this rule from the assigned group after deleting this resource. Default is `false`. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.status">status</a></code> | <code>str</code> | Default to `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.usersExcluded">users_excluded</a></code> | <code>typing.List[str]</code> | The list of user IDs that would be excluded when rules are processed. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `expression_value`<sup>Required</sup> <a name="expression_value" id="@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.expressionValue"></a>

- *Type:* str

The expression value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/group_rule#expression_value GroupRule#expression_value}

---

##### `group_assignments`<sup>Required</sup> <a name="group_assignments" id="@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.groupAssignments"></a>

- *Type:* typing.List[str]

The list of group ids to assign the users to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/group_rule#group_assignments GroupRule#group_assignments}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.name"></a>

- *Type:* str

The name of the Group Rule (min character 1; max characters 50).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/group_rule#name GroupRule#name}

---

##### `expression_type`<sup>Optional</sup> <a name="expression_type" id="@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.expressionType"></a>

- *Type:* str

The expression type to use to invoke the rule. The default is `urn:okta:expression:1.0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/group_rule#expression_type GroupRule#expression_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/group_rule#id GroupRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `remove_assigned_users`<sup>Optional</sup> <a name="remove_assigned_users" id="@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.removeAssignedUsers"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Remove users added by this rule from the assigned group after deleting this resource. Default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/group_rule#remove_assigned_users GroupRule#remove_assigned_users}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.status"></a>

- *Type:* str

Default to `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/group_rule#status GroupRule#status}

---

##### `users_excluded`<sup>Optional</sup> <a name="users_excluded" id="@cdktf/provider-okta.groupRule.GroupRule.Initializer.parameter.usersExcluded"></a>

- *Type:* typing.List[str]

The list of user IDs that would be excluded when rules are processed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/group_rule#users_excluded GroupRule#users_excluded}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.resetExpressionType">reset_expression_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.resetRemoveAssignedUsers">reset_remove_assigned_users</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.resetUsersExcluded">reset_users_excluded</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.groupRule.GroupRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.groupRule.GroupRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.groupRule.GroupRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.groupRule.GroupRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.groupRule.GroupRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.groupRule.GroupRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.groupRule.GroupRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-okta.groupRule.GroupRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.groupRule.GroupRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.groupRule.GroupRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-okta.groupRule.GroupRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.groupRule.GroupRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.groupRule.GroupRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupRule.GroupRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.groupRule.GroupRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupRule.GroupRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.groupRule.GroupRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupRule.GroupRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.groupRule.GroupRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupRule.GroupRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.groupRule.GroupRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupRule.GroupRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.groupRule.GroupRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupRule.GroupRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.groupRule.GroupRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupRule.GroupRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.groupRule.GroupRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupRule.GroupRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.groupRule.GroupRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupRule.GroupRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-okta.groupRule.GroupRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-okta.groupRule.GroupRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.groupRule.GroupRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.groupRule.GroupRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.groupRule.GroupRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.groupRule.GroupRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-okta.groupRule.GroupRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.groupRule.GroupRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-okta.groupRule.GroupRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-okta.groupRule.GroupRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.groupRule.GroupRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-okta.groupRule.GroupRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.groupRule.GroupRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_expression_type` <a name="reset_expression_type" id="@cdktf/provider-okta.groupRule.GroupRule.resetExpressionType"></a>

```python
def reset_expression_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.groupRule.GroupRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_remove_assigned_users` <a name="reset_remove_assigned_users" id="@cdktf/provider-okta.groupRule.GroupRule.resetRemoveAssignedUsers"></a>

```python
def reset_remove_assigned_users() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-okta.groupRule.GroupRule.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_users_excluded` <a name="reset_users_excluded" id="@cdktf/provider-okta.groupRule.GroupRule.resetUsersExcluded"></a>

```python
def reset_users_excluded() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GroupRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.groupRule.GroupRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import group_rule

groupRule.GroupRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.groupRule.GroupRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.groupRule.GroupRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import group_rule

groupRule.GroupRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.groupRule.GroupRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-okta.groupRule.GroupRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_okta import group_rule

groupRule.GroupRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.groupRule.GroupRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.groupRule.GroupRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import group_rule

groupRule.GroupRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GroupRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.groupRule.GroupRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.groupRule.GroupRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GroupRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.groupRule.GroupRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GroupRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/group_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.groupRule.GroupRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GroupRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.expressionTypeInput">expression_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.expressionValueInput">expression_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.groupAssignmentsInput">group_assignments_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.removeAssignedUsersInput">remove_assigned_users_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.usersExcludedInput">users_excluded_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.expressionType">expression_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.expressionValue">expression_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.groupAssignments">group_assignments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.removeAssignedUsers">remove_assigned_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.usersExcluded">users_excluded</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.groupRule.GroupRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.groupRule.GroupRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.groupRule.GroupRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.groupRule.GroupRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.groupRule.GroupRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.groupRule.GroupRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.groupRule.GroupRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.groupRule.GroupRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.groupRule.GroupRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.groupRule.GroupRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.groupRule.GroupRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.groupRule.GroupRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.groupRule.GroupRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.groupRule.GroupRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `expression_type_input`<sup>Optional</sup> <a name="expression_type_input" id="@cdktf/provider-okta.groupRule.GroupRule.property.expressionTypeInput"></a>

```python
expression_type_input: str
```

- *Type:* str

---

##### `expression_value_input`<sup>Optional</sup> <a name="expression_value_input" id="@cdktf/provider-okta.groupRule.GroupRule.property.expressionValueInput"></a>

```python
expression_value_input: str
```

- *Type:* str

---

##### `group_assignments_input`<sup>Optional</sup> <a name="group_assignments_input" id="@cdktf/provider-okta.groupRule.GroupRule.property.groupAssignmentsInput"></a>

```python
group_assignments_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.groupRule.GroupRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.groupRule.GroupRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `remove_assigned_users_input`<sup>Optional</sup> <a name="remove_assigned_users_input" id="@cdktf/provider-okta.groupRule.GroupRule.property.removeAssignedUsersInput"></a>

```python
remove_assigned_users_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-okta.groupRule.GroupRule.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `users_excluded_input`<sup>Optional</sup> <a name="users_excluded_input" id="@cdktf/provider-okta.groupRule.GroupRule.property.usersExcludedInput"></a>

```python
users_excluded_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `expression_type`<sup>Required</sup> <a name="expression_type" id="@cdktf/provider-okta.groupRule.GroupRule.property.expressionType"></a>

```python
expression_type: str
```

- *Type:* str

---

##### `expression_value`<sup>Required</sup> <a name="expression_value" id="@cdktf/provider-okta.groupRule.GroupRule.property.expressionValue"></a>

```python
expression_value: str
```

- *Type:* str

---

##### `group_assignments`<sup>Required</sup> <a name="group_assignments" id="@cdktf/provider-okta.groupRule.GroupRule.property.groupAssignments"></a>

```python
group_assignments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.groupRule.GroupRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.groupRule.GroupRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `remove_assigned_users`<sup>Required</sup> <a name="remove_assigned_users" id="@cdktf/provider-okta.groupRule.GroupRule.property.removeAssignedUsers"></a>

```python
remove_assigned_users: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.groupRule.GroupRule.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `users_excluded`<sup>Required</sup> <a name="users_excluded" id="@cdktf/provider-okta.groupRule.GroupRule.property.usersExcluded"></a>

```python
users_excluded: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.groupRule.GroupRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GroupRuleConfig <a name="GroupRuleConfig" id="@cdktf/provider-okta.groupRule.GroupRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.groupRule.GroupRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import group_rule

groupRule.GroupRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  expression_value: str,
  group_assignments: typing.List[str],
  name: str,
  expression_type: str = None,
  id: str = None,
  remove_assigned_users: typing.Union[bool, IResolvable] = None,
  status: str = None,
  users_excluded: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRuleConfig.property.expressionValue">expression_value</a></code> | <code>str</code> | The expression value. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRuleConfig.property.groupAssignments">group_assignments</a></code> | <code>typing.List[str]</code> | The list of group ids to assign the users to. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRuleConfig.property.name">name</a></code> | <code>str</code> | The name of the Group Rule (min character 1; max characters 50). |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRuleConfig.property.expressionType">expression_type</a></code> | <code>str</code> | The expression type to use to invoke the rule. The default is `urn:okta:expression:1.0`. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/group_rule#id GroupRule#id}. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRuleConfig.property.removeAssignedUsers">remove_assigned_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Remove users added by this rule from the assigned group after deleting this resource. Default is `false`. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRuleConfig.property.status">status</a></code> | <code>str</code> | Default to `ACTIVE`. |
| <code><a href="#@cdktf/provider-okta.groupRule.GroupRuleConfig.property.usersExcluded">users_excluded</a></code> | <code>typing.List[str]</code> | The list of user IDs that would be excluded when rules are processed. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.groupRule.GroupRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.groupRule.GroupRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.groupRule.GroupRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.groupRule.GroupRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.groupRule.GroupRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.groupRule.GroupRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.groupRule.GroupRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `expression_value`<sup>Required</sup> <a name="expression_value" id="@cdktf/provider-okta.groupRule.GroupRuleConfig.property.expressionValue"></a>

```python
expression_value: str
```

- *Type:* str

The expression value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/group_rule#expression_value GroupRule#expression_value}

---

##### `group_assignments`<sup>Required</sup> <a name="group_assignments" id="@cdktf/provider-okta.groupRule.GroupRuleConfig.property.groupAssignments"></a>

```python
group_assignments: typing.List[str]
```

- *Type:* typing.List[str]

The list of group ids to assign the users to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/group_rule#group_assignments GroupRule#group_assignments}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.groupRule.GroupRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Group Rule (min character 1; max characters 50).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/group_rule#name GroupRule#name}

---

##### `expression_type`<sup>Optional</sup> <a name="expression_type" id="@cdktf/provider-okta.groupRule.GroupRuleConfig.property.expressionType"></a>

```python
expression_type: str
```

- *Type:* str

The expression type to use to invoke the rule. The default is `urn:okta:expression:1.0`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/group_rule#expression_type GroupRule#expression_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.groupRule.GroupRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/group_rule#id GroupRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `remove_assigned_users`<sup>Optional</sup> <a name="remove_assigned_users" id="@cdktf/provider-okta.groupRule.GroupRuleConfig.property.removeAssignedUsers"></a>

```python
remove_assigned_users: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Remove users added by this rule from the assigned group after deleting this resource. Default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/group_rule#remove_assigned_users GroupRule#remove_assigned_users}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.groupRule.GroupRuleConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Default to `ACTIVE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/group_rule#status GroupRule#status}

---

##### `users_excluded`<sup>Optional</sup> <a name="users_excluded" id="@cdktf/provider-okta.groupRule.GroupRuleConfig.property.usersExcluded"></a>

```python
users_excluded: typing.List[str]
```

- *Type:* typing.List[str]

The list of user IDs that would be excluded when rules are processed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.16.0/docs/resources/group_rule#users_excluded GroupRule#users_excluded}

---



