# `data_okta_user`

Refer to the Terraform Registory for docs: [`data_okta_user`](https://registry.terraform.io/providers/okta/okta/4.6.1/docs/data-sources/user).

# `dataOktaUser` Submodule <a name="`dataOktaUser` Submodule" id="@cdktf/provider-okta.dataOktaUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaUser <a name="DataOktaUser" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/data-sources/user okta_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_user

dataOktaUser.DataOktaUser(
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
  id: str = None,
  search: typing.Union[IResolvable, typing.List[DataOktaUserSearch]] = None,
  skip_groups: typing.Union[bool, IResolvable] = None,
  skip_roles: typing.Union[bool, IResolvable] = None,
  user_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.compoundSearchOperator">compound_search_operator</a></code> | <code>str</code> | Search operator used when joining mulitple search clauses. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.delayReadSeconds">delay_read_seconds</a></code> | <code>str</code> | Force delay of the user read by N seconds. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/data-sources/user#id DataOktaUser#id}. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.search">search</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch">DataOktaUserSearch</a>]]</code> | search block. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.skipGroups">skip_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not populate user groups information (prevents additional API call). |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.skipRoles">skip_roles</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not populate user roles information (prevents additional API call). |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.userId">user_id</a></code> | <code>str</code> | Retrieve a single user based on their id. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compound_search_operator`<sup>Optional</sup> <a name="compound_search_operator" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.compoundSearchOperator"></a>

- *Type:* str

Search operator used when joining mulitple search clauses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/data-sources/user#compound_search_operator DataOktaUser#compound_search_operator}

---

##### `delay_read_seconds`<sup>Optional</sup> <a name="delay_read_seconds" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.delayReadSeconds"></a>

- *Type:* str

Force delay of the user read by N seconds.

Useful when eventual consistency of user information needs to be allowed for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/data-sources/user#delay_read_seconds DataOktaUser#delay_read_seconds}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/data-sources/user#id DataOktaUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.search"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch">DataOktaUserSearch</a>]]

search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/data-sources/user#search DataOktaUser#search}

---

##### `skip_groups`<sup>Optional</sup> <a name="skip_groups" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.skipGroups"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not populate user groups information (prevents additional API call).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/data-sources/user#skip_groups DataOktaUser#skip_groups}

---

##### `skip_roles`<sup>Optional</sup> <a name="skip_roles" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.skipRoles"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not populate user roles information (prevents additional API call).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/data-sources/user#skip_roles DataOktaUser#skip_roles}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.userId"></a>

- *Type:* str

Retrieve a single user based on their id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/data-sources/user#user_id DataOktaUser#user_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.putSearch">put_search</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetCompoundSearchOperator">reset_compound_search_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetDelayReadSeconds">reset_delay_read_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetSearch">reset_search</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetSkipGroups">reset_skip_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetSkipRoles">reset_skip_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetUserId">reset_user_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_search` <a name="put_search" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.putSearch"></a>

```python
def put_search(
  value: typing.Union[IResolvable, typing.List[DataOktaUserSearch]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.putSearch.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch">DataOktaUserSearch</a>]]

---

##### `reset_compound_search_operator` <a name="reset_compound_search_operator" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetCompoundSearchOperator"></a>

```python
def reset_compound_search_operator() -> None
```

##### `reset_delay_read_seconds` <a name="reset_delay_read_seconds" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetDelayReadSeconds"></a>

```python
def reset_delay_read_seconds() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_search` <a name="reset_search" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetSearch"></a>

```python
def reset_search() -> None
```

##### `reset_skip_groups` <a name="reset_skip_groups" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetSkipGroups"></a>

```python
def reset_skip_groups() -> None
```

##### `reset_skip_roles` <a name="reset_skip_roles" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetSkipRoles"></a>

```python
def reset_skip_roles() -> None
```

##### `reset_user_id` <a name="reset_user_id" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetUserId"></a>

```python
def reset_user_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOktaUser resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_user

dataOktaUser.DataOktaUser.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_user

dataOktaUser.DataOktaUser.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_user

dataOktaUser.DataOktaUser.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_user

dataOktaUser.DataOktaUser.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOktaUser resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOktaUser to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOktaUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/data-sources/user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOktaUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.adminRoles">admin_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.costCenter">cost_center</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.countryCode">country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.customProfileAttributes">custom_profile_attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.department">department</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.division">division</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.employeeNumber">employee_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.groupMemberships">group_memberships</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.honorificPrefix">honorific_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.honorificSuffix">honorific_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.locale">locale</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.login">login</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.manager">manager</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.managerId">manager_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.middleName">middle_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.mobilePhone">mobile_phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.nickName">nick_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.postalAddress">postal_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.preferredLanguage">preferred_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.primaryPhone">primary_phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.profileUrl">profile_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.roles">roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.search">search</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList">DataOktaUserSearchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.secondEmail">second_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.streetAddress">street_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.userType">user_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.zipCode">zip_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.compoundSearchOperatorInput">compound_search_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.delayReadSecondsInput">delay_read_seconds_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.searchInput">search_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch">DataOktaUserSearch</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipGroupsInput">skip_groups_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipRolesInput">skip_roles_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.userIdInput">user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.compoundSearchOperator">compound_search_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.delayReadSeconds">delay_read_seconds</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipGroups">skip_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipRoles">skip_roles</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.userId">user_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `admin_roles`<sup>Required</sup> <a name="admin_roles" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.adminRoles"></a>

```python
admin_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `cost_center`<sup>Required</sup> <a name="cost_center" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.costCenter"></a>

```python
cost_center: str
```

- *Type:* str

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

---

##### `custom_profile_attributes`<sup>Required</sup> <a name="custom_profile_attributes" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.customProfileAttributes"></a>

```python
custom_profile_attributes: str
```

- *Type:* str

---

##### `department`<sup>Required</sup> <a name="department" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.department"></a>

```python
department: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `division`<sup>Required</sup> <a name="division" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.division"></a>

```python
division: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `employee_number`<sup>Required</sup> <a name="employee_number" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.employeeNumber"></a>

```python
employee_number: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `group_memberships`<sup>Required</sup> <a name="group_memberships" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.groupMemberships"></a>

```python
group_memberships: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `honorific_prefix`<sup>Required</sup> <a name="honorific_prefix" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.honorificPrefix"></a>

```python
honorific_prefix: str
```

- *Type:* str

---

##### `honorific_suffix`<sup>Required</sup> <a name="honorific_suffix" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.honorificSuffix"></a>

```python
honorific_suffix: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.locale"></a>

```python
locale: str
```

- *Type:* str

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.login"></a>

```python
login: str
```

- *Type:* str

---

##### `manager`<sup>Required</sup> <a name="manager" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.manager"></a>

```python
manager: str
```

- *Type:* str

---

##### `manager_id`<sup>Required</sup> <a name="manager_id" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.managerId"></a>

```python
manager_id: str
```

- *Type:* str

---

##### `middle_name`<sup>Required</sup> <a name="middle_name" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.middleName"></a>

```python
middle_name: str
```

- *Type:* str

---

##### `mobile_phone`<sup>Required</sup> <a name="mobile_phone" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.mobilePhone"></a>

```python
mobile_phone: str
```

- *Type:* str

---

##### `nick_name`<sup>Required</sup> <a name="nick_name" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.nickName"></a>

```python
nick_name: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `postal_address`<sup>Required</sup> <a name="postal_address" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.postalAddress"></a>

```python
postal_address: str
```

- *Type:* str

---

##### `preferred_language`<sup>Required</sup> <a name="preferred_language" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.preferredLanguage"></a>

```python
preferred_language: str
```

- *Type:* str

---

##### `primary_phone`<sup>Required</sup> <a name="primary_phone" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.primaryPhone"></a>

```python
primary_phone: str
```

- *Type:* str

---

##### `profile_url`<sup>Required</sup> <a name="profile_url" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.profileUrl"></a>

```python
profile_url: str
```

- *Type:* str

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.search"></a>

```python
search: DataOktaUserSearchList
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList">DataOktaUserSearchList</a>

---

##### `second_email`<sup>Required</sup> <a name="second_email" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.secondEmail"></a>

```python
second_email: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `street_address`<sup>Required</sup> <a name="street_address" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.streetAddress"></a>

```python
street_address: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `user_type`<sup>Required</sup> <a name="user_type" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.userType"></a>

```python
user_type: str
```

- *Type:* str

---

##### `zip_code`<sup>Required</sup> <a name="zip_code" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.zipCode"></a>

```python
zip_code: str
```

- *Type:* str

---

##### `compound_search_operator_input`<sup>Optional</sup> <a name="compound_search_operator_input" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.compoundSearchOperatorInput"></a>

```python
compound_search_operator_input: str
```

- *Type:* str

---

##### `delay_read_seconds_input`<sup>Optional</sup> <a name="delay_read_seconds_input" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.delayReadSecondsInput"></a>

```python
delay_read_seconds_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `search_input`<sup>Optional</sup> <a name="search_input" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.searchInput"></a>

```python
search_input: typing.Union[IResolvable, typing.List[DataOktaUserSearch]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch">DataOktaUserSearch</a>]]

---

##### `skip_groups_input`<sup>Optional</sup> <a name="skip_groups_input" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipGroupsInput"></a>

```python
skip_groups_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_roles_input`<sup>Optional</sup> <a name="skip_roles_input" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipRolesInput"></a>

```python
skip_roles_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.userIdInput"></a>

```python
user_id_input: str
```

- *Type:* str

---

##### `compound_search_operator`<sup>Required</sup> <a name="compound_search_operator" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.compoundSearchOperator"></a>

```python
compound_search_operator: str
```

- *Type:* str

---

##### `delay_read_seconds`<sup>Required</sup> <a name="delay_read_seconds" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.delayReadSeconds"></a>

```python
delay_read_seconds: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `skip_groups`<sup>Required</sup> <a name="skip_groups" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipGroups"></a>

```python
skip_groups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_roles`<sup>Required</sup> <a name="skip_roles" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipRoles"></a>

```python
skip_roles: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaUserConfig <a name="DataOktaUserConfig" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_user

dataOktaUser.DataOktaUserConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compound_search_operator: str = None,
  delay_read_seconds: str = None,
  id: str = None,
  search: typing.Union[IResolvable, typing.List[DataOktaUserSearch]] = None,
  skip_groups: typing.Union[bool, IResolvable] = None,
  skip_roles: typing.Union[bool, IResolvable] = None,
  user_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.compoundSearchOperator">compound_search_operator</a></code> | <code>str</code> | Search operator used when joining mulitple search clauses. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.delayReadSeconds">delay_read_seconds</a></code> | <code>str</code> | Force delay of the user read by N seconds. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/data-sources/user#id DataOktaUser#id}. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.search">search</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch">DataOktaUserSearch</a>]]</code> | search block. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.skipGroups">skip_groups</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not populate user groups information (prevents additional API call). |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.skipRoles">skip_roles</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Do not populate user roles information (prevents additional API call). |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.userId">user_id</a></code> | <code>str</code> | Retrieve a single user based on their id. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compound_search_operator`<sup>Optional</sup> <a name="compound_search_operator" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.compoundSearchOperator"></a>

```python
compound_search_operator: str
```

- *Type:* str

Search operator used when joining mulitple search clauses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/data-sources/user#compound_search_operator DataOktaUser#compound_search_operator}

---

##### `delay_read_seconds`<sup>Optional</sup> <a name="delay_read_seconds" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.delayReadSeconds"></a>

```python
delay_read_seconds: str
```

- *Type:* str

Force delay of the user read by N seconds.

Useful when eventual consistency of user information needs to be allowed for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/data-sources/user#delay_read_seconds DataOktaUser#delay_read_seconds}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/data-sources/user#id DataOktaUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.search"></a>

```python
search: typing.Union[IResolvable, typing.List[DataOktaUserSearch]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch">DataOktaUserSearch</a>]]

search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/data-sources/user#search DataOktaUser#search}

---

##### `skip_groups`<sup>Optional</sup> <a name="skip_groups" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.skipGroups"></a>

```python
skip_groups: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not populate user groups information (prevents additional API call).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/data-sources/user#skip_groups DataOktaUser#skip_groups}

---

##### `skip_roles`<sup>Optional</sup> <a name="skip_roles" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.skipRoles"></a>

```python
skip_roles: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Do not populate user roles information (prevents additional API call).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/data-sources/user#skip_roles DataOktaUser#skip_roles}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.userId"></a>

```python
user_id: str
```

- *Type:* str

Retrieve a single user based on their id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/data-sources/user#user_id DataOktaUser#user_id}

---

### DataOktaUserSearch <a name="DataOktaUserSearch" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_user

dataOktaUser.DataOktaUserSearch(
  comparison: str = None,
  expression: str = None,
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.comparison">comparison</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/data-sources/user#comparison DataOktaUser#comparison}. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.expression">expression</a></code> | <code>str</code> | A raw search expression string. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.name">name</a></code> | <code>str</code> | Property name to search for. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/data-sources/user#value DataOktaUser#value}. |

---

##### `comparison`<sup>Optional</sup> <a name="comparison" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/data-sources/user#comparison DataOktaUser#comparison}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.expression"></a>

```python
expression: str
```

- *Type:* str

A raw search expression string.

This requires the search feature be on. Please see Okta documentation on their filter API for users. https://developer.okta.com/docs/api/resources/users#list-users-with-search

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/data-sources/user#expression DataOktaUser#expression}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.name"></a>

```python
name: str
```

- *Type:* str

Property name to search for.

This requires the search feature be on. Please see Okta documentation on their filter API for users. https://developer.okta.com/docs/api/resources/users#list-users-with-search

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/data-sources/user#name DataOktaUser#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/data-sources/user#value DataOktaUser#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOktaUserSearchList <a name="DataOktaUserSearchList" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_user

dataOktaUser.DataOktaUserSearchList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOktaUserSearchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch">DataOktaUserSearch</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOktaUserSearch]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch">DataOktaUserSearch</a>]]

---


### DataOktaUserSearchOutputReference <a name="DataOktaUserSearchOutputReference" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_user

dataOktaUser.DataOktaUserSearchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetComparison">reset_comparison</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetExpression">reset_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comparison` <a name="reset_comparison" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetComparison"></a>

```python
def reset_comparison() -> None
```

##### `reset_expression` <a name="reset_expression" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.comparisonInput">comparison_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.comparison">comparison</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch">DataOktaUserSearch</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_input`<sup>Optional</sup> <a name="comparison_input" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.comparisonInput"></a>

```python
comparison_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `comparison`<sup>Required</sup> <a name="comparison" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.comparison"></a>

```python
comparison: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOktaUserSearch]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch">DataOktaUserSearch</a>]

---



