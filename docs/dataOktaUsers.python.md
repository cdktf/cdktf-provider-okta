# `data_okta_users`

Refer to the Terraform Registory for docs: [`data_okta_users`](https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/users).

# `dataOktaUsers` Submodule <a name="`dataOktaUsers` Submodule" id="@cdktf/provider-okta.dataOktaUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaUsers <a name="DataOktaUsers" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/users okta_users}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_users

dataOktaUsers.DataOktaUsers(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compound_search_operator: str = None,
  delay_read_seconds: str = None,
  group_id: str = None,
  id: str = None,
  include_groups: typing.Union[bool, IResolvable] = None,
  include_roles: typing.Union[bool, IResolvable] = None,
  search: typing.Union[IResolvable, typing.List[DataOktaUsersSearch]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.compoundSearchOperator">compound_search_operator</a></code> | <code>str</code> | Search operator used when joining mulitple search clauses. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.delayReadSeconds">delay_read_seconds</a></code> | <code>str</code> | Force delay of the users read by N seconds. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.groupId">group_id</a></code> | <code>str</code> | Find users based on group membership using the id of the group. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/users#id DataOktaUsers#id}. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.includeGroups">include_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Fetch group memberships for each user. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.includeRoles">include_roles</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Fetch user roles for each user. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.search">search</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch">DataOktaUsersSearch</a>]]</code> | search block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compound_search_operator`<sup>Optional</sup> <a name="compound_search_operator" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.compoundSearchOperator"></a>

- *Type:* str

Search operator used when joining mulitple search clauses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/users#compound_search_operator DataOktaUsers#compound_search_operator}

---

##### `delay_read_seconds`<sup>Optional</sup> <a name="delay_read_seconds" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.delayReadSeconds"></a>

- *Type:* str

Force delay of the users read by N seconds.

Useful when eventual consistency of users information needs to be allowed for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/users#delay_read_seconds DataOktaUsers#delay_read_seconds}

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.groupId"></a>

- *Type:* str

Find users based on group membership using the id of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/users#group_id DataOktaUsers#group_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/users#id DataOktaUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_groups`<sup>Optional</sup> <a name="include_groups" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.includeGroups"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Fetch group memberships for each user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/users#include_groups DataOktaUsers#include_groups}

---

##### `include_roles`<sup>Optional</sup> <a name="include_roles" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.includeRoles"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Fetch user roles for each user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/users#include_roles DataOktaUsers#include_roles}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.Initializer.parameter.search"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch">DataOktaUsersSearch</a>]]

search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/users#search DataOktaUsers#search}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.putSearch">put_search</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetCompoundSearchOperator">reset_compound_search_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetDelayReadSeconds">reset_delay_read_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetGroupId">reset_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetIncludeGroups">reset_include_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetIncludeRoles">reset_include_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetSearch">reset_search</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_search` <a name="put_search" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.putSearch"></a>

```python
def put_search(
  value: typing.Union[IResolvable, typing.List[DataOktaUsersSearch]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.putSearch.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch">DataOktaUsersSearch</a>]]

---

##### `reset_compound_search_operator` <a name="reset_compound_search_operator" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetCompoundSearchOperator"></a>

```python
def reset_compound_search_operator() -> None
```

##### `reset_delay_read_seconds` <a name="reset_delay_read_seconds" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetDelayReadSeconds"></a>

```python
def reset_delay_read_seconds() -> None
```

##### `reset_group_id` <a name="reset_group_id" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetGroupId"></a>

```python
def reset_group_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_include_groups` <a name="reset_include_groups" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetIncludeGroups"></a>

```python
def reset_include_groups() -> None
```

##### `reset_include_roles` <a name="reset_include_roles" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetIncludeRoles"></a>

```python
def reset_include_roles() -> None
```

##### `reset_search` <a name="reset_search" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.resetSearch"></a>

```python
def reset_search() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_users

dataOktaUsers.DataOktaUsers.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_users

dataOktaUsers.DataOktaUsers.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_users

dataOktaUsers.DataOktaUsers.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.search">search</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList">DataOktaUsersSearchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.users">users</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList">DataOktaUsersUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.compoundSearchOperatorInput">compound_search_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.delayReadSecondsInput">delay_read_seconds_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.includeGroupsInput">include_groups_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.includeRolesInput">include_roles_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.searchInput">search_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch">DataOktaUsersSearch</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.compoundSearchOperator">compound_search_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.delayReadSeconds">delay_read_seconds</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.includeGroups">include_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.includeRoles">include_roles</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.search"></a>

```python
search: DataOktaUsersSearchList
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList">DataOktaUsersSearchList</a>

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.users"></a>

```python
users: DataOktaUsersUsersList
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList">DataOktaUsersUsersList</a>

---

##### `compound_search_operator_input`<sup>Optional</sup> <a name="compound_search_operator_input" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.compoundSearchOperatorInput"></a>

```python
compound_search_operator_input: str
```

- *Type:* str

---

##### `delay_read_seconds_input`<sup>Optional</sup> <a name="delay_read_seconds_input" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.delayReadSecondsInput"></a>

```python
delay_read_seconds_input: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `include_groups_input`<sup>Optional</sup> <a name="include_groups_input" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.includeGroupsInput"></a>

```python
include_groups_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_roles_input`<sup>Optional</sup> <a name="include_roles_input" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.includeRolesInput"></a>

```python
include_roles_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.searchInput"></a>

```python
search_input: typing.Union[IResolvable, typing.List[DataOktaUsersSearch]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch">DataOktaUsersSearch</a>]]

---

##### `compound_search_operator`<sup>Required</sup> <a name="compound_search_operator" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.compoundSearchOperator"></a>

```python
compound_search_operator: str
```

- *Type:* str

---

##### `delay_read_seconds`<sup>Required</sup> <a name="delay_read_seconds" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.delayReadSeconds"></a>

```python
delay_read_seconds: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `include_groups`<sup>Required</sup> <a name="include_groups" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.includeGroups"></a>

```python
include_groups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `include_roles`<sup>Required</sup> <a name="include_roles" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.includeRoles"></a>

```python
include_roles: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsers.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaUsersConfig <a name="DataOktaUsersConfig" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_users

dataOktaUsers.DataOktaUsersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compound_search_operator: str = None,
  delay_read_seconds: str = None,
  group_id: str = None,
  id: str = None,
  include_groups: typing.Union[bool, IResolvable] = None,
  include_roles: typing.Union[bool, IResolvable] = None,
  search: typing.Union[IResolvable, typing.List[DataOktaUsersSearch]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.compoundSearchOperator">compound_search_operator</a></code> | <code>str</code> | Search operator used when joining mulitple search clauses. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.delayReadSeconds">delay_read_seconds</a></code> | <code>str</code> | Force delay of the users read by N seconds. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.groupId">group_id</a></code> | <code>str</code> | Find users based on group membership using the id of the group. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/users#id DataOktaUsers#id}. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.includeGroups">include_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Fetch group memberships for each user. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.includeRoles">include_roles</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Fetch user roles for each user. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.search">search</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch">DataOktaUsersSearch</a>]]</code> | search block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compound_search_operator`<sup>Optional</sup> <a name="compound_search_operator" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.compoundSearchOperator"></a>

```python
compound_search_operator: str
```

- *Type:* str

Search operator used when joining mulitple search clauses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/users#compound_search_operator DataOktaUsers#compound_search_operator}

---

##### `delay_read_seconds`<sup>Optional</sup> <a name="delay_read_seconds" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.delayReadSeconds"></a>

```python
delay_read_seconds: str
```

- *Type:* str

Force delay of the users read by N seconds.

Useful when eventual consistency of users information needs to be allowed for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/users#delay_read_seconds DataOktaUsers#delay_read_seconds}

---

##### `group_id`<sup>Optional</sup> <a name="group_id" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

Find users based on group membership using the id of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/users#group_id DataOktaUsers#group_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/users#id DataOktaUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_groups`<sup>Optional</sup> <a name="include_groups" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.includeGroups"></a>

```python
include_groups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Fetch group memberships for each user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/users#include_groups DataOktaUsers#include_groups}

---

##### `include_roles`<sup>Optional</sup> <a name="include_roles" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.includeRoles"></a>

```python
include_roles: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Fetch user roles for each user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/users#include_roles DataOktaUsers#include_roles}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersConfig.property.search"></a>

```python
search: typing.Union[IResolvable, typing.List[DataOktaUsersSearch]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch">DataOktaUsersSearch</a>]]

search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/users#search DataOktaUsers#search}

---

### DataOktaUsersSearch <a name="DataOktaUsersSearch" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_users

dataOktaUsers.DataOktaUsersSearch(
  comparison: str = None,
  expression: str = None,
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch.property.comparison">comparison</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/users#comparison DataOktaUsers#comparison}. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch.property.expression">expression</a></code> | <code>str</code> | A raw search expression string. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch.property.name">name</a></code> | <code>str</code> | Property name to search for. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/users#value DataOktaUsers#value}. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/users#comparison DataOktaUsers#comparison}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch.property.expression"></a>

```python
expression: str
```

- *Type:* str

A raw search expression string.

This requires the search feature be on. Please see Okta documentation on their filter API for users. https://developer.okta.com/docs/api/resources/users#list-users-with-search

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/users#expression DataOktaUsers#expression}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch.property.name"></a>

```python
name: str
```

- *Type:* str

Property name to search for.

This requires the search feature be on. Please see Okta documentation on their filter API for users. https://developer.okta.com/docs/api/resources/users#list-users-with-search

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/users#name DataOktaUsers#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/data-sources/users#value DataOktaUsers#value}.

---

### DataOktaUsersUsers <a name="DataOktaUsersUsers" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsers.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_users

dataOktaUsers.DataOktaUsersUsers()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOktaUsersSearchList <a name="DataOktaUsersSearchList" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_users

dataOktaUsers.DataOktaUsersSearchList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOktaUsersSearchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch">DataOktaUsersSearch</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOktaUsersSearch]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch">DataOktaUsersSearch</a>]]

---


### DataOktaUsersSearchOutputReference <a name="DataOktaUsersSearchOutputReference" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_users

dataOktaUsers.DataOktaUsersSearchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.resetComparison">reset_comparison</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.resetExpression">reset_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comparison` <a name="reset_comparison" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.resetComparison"></a>

```python
def reset_comparison() -> None
```

##### `reset_expression` <a name="reset_expression" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.comparisonInput">comparison_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.comparison">comparison</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch">DataOktaUsersSearch</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_input`<sup>Optional</sup> <a name="comparison_input" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.comparisonInput"></a>

```python
comparison_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearchOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataOktaUsersSearch, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersSearch">DataOktaUsersSearch</a>, cdktf.IResolvable]

---


### DataOktaUsersUsersList <a name="DataOktaUsersUsersList" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_users

dataOktaUsers.DataOktaUsersUsersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOktaUsersUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOktaUsersUsersOutputReference <a name="DataOktaUsersUsersOutputReference" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_users

dataOktaUsers.DataOktaUsersUsersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.adminRoles">admin_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.costCenter">cost_center</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.countryCode">country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.customProfileAttributes">custom_profile_attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.department">department</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.division">division</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.employeeNumber">employee_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.groupMemberships">group_memberships</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.honorificPrefix">honorific_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.honorificSuffix">honorific_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.locale">locale</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.login">login</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.manager">manager</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.managerId">manager_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.middleName">middle_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.mobilePhone">mobile_phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.nickName">nick_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.postalAddress">postal_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.preferredLanguage">preferred_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.primaryPhone">primary_phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.profileUrl">profile_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.roles">roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.secondEmail">second_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.streetAddress">street_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.userType">user_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.zipCode">zip_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsers">DataOktaUsersUsers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_roles`<sup>Required</sup> <a name="admin_roles" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.adminRoles"></a>

```python
admin_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `cost_center`<sup>Required</sup> <a name="cost_center" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.costCenter"></a>

```python
cost_center: str
```

- *Type:* str

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

---

##### `custom_profile_attributes`<sup>Required</sup> <a name="custom_profile_attributes" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.customProfileAttributes"></a>

```python
custom_profile_attributes: str
```

- *Type:* str

---

##### `department`<sup>Required</sup> <a name="department" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.department"></a>

```python
department: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `division`<sup>Required</sup> <a name="division" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.division"></a>

```python
division: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `employee_number`<sup>Required</sup> <a name="employee_number" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.employeeNumber"></a>

```python
employee_number: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `group_memberships`<sup>Required</sup> <a name="group_memberships" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.groupMemberships"></a>

```python
group_memberships: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `honorific_prefix`<sup>Required</sup> <a name="honorific_prefix" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.honorificPrefix"></a>

```python
honorific_prefix: str
```

- *Type:* str

---

##### `honorific_suffix`<sup>Required</sup> <a name="honorific_suffix" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.honorificSuffix"></a>

```python
honorific_suffix: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.locale"></a>

```python
locale: str
```

- *Type:* str

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.login"></a>

```python
login: str
```

- *Type:* str

---

##### `manager`<sup>Required</sup> <a name="manager" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.manager"></a>

```python
manager: str
```

- *Type:* str

---

##### `manager_id`<sup>Required</sup> <a name="manager_id" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.managerId"></a>

```python
manager_id: str
```

- *Type:* str

---

##### `middle_name`<sup>Required</sup> <a name="middle_name" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.middleName"></a>

```python
middle_name: str
```

- *Type:* str

---

##### `mobile_phone`<sup>Required</sup> <a name="mobile_phone" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.mobilePhone"></a>

```python
mobile_phone: str
```

- *Type:* str

---

##### `nick_name`<sup>Required</sup> <a name="nick_name" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.nickName"></a>

```python
nick_name: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `postal_address`<sup>Required</sup> <a name="postal_address" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.postalAddress"></a>

```python
postal_address: str
```

- *Type:* str

---

##### `preferred_language`<sup>Required</sup> <a name="preferred_language" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.preferredLanguage"></a>

```python
preferred_language: str
```

- *Type:* str

---

##### `primary_phone`<sup>Required</sup> <a name="primary_phone" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.primaryPhone"></a>

```python
primary_phone: str
```

- *Type:* str

---

##### `profile_url`<sup>Required</sup> <a name="profile_url" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.profileUrl"></a>

```python
profile_url: str
```

- *Type:* str

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `second_email`<sup>Required</sup> <a name="second_email" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.secondEmail"></a>

```python
second_email: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `street_address`<sup>Required</sup> <a name="street_address" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.streetAddress"></a>

```python
street_address: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `user_type`<sup>Required</sup> <a name="user_type" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.userType"></a>

```python
user_type: str
```

- *Type:* str

---

##### `zip_code`<sup>Required</sup> <a name="zip_code" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.zipCode"></a>

```python
zip_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsersOutputReference.property.internalValue"></a>

```python
internal_value: DataOktaUsersUsers
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaUsers.DataOktaUsersUsers">DataOktaUsersUsers</a>

---



