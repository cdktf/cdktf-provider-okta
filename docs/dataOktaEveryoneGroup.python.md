# `dataOktaEveryoneGroup` Submodule <a name="`dataOktaEveryoneGroup` Submodule" id="@cdktf/provider-okta.dataOktaEveryoneGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaEveryoneGroup <a name="DataOktaEveryoneGroup" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/d/everyone_group okta_everyone_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_everyone_group

dataOktaEveryoneGroup.DataOktaEveryoneGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  include_users: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/everyone_group#id DataOktaEveryoneGroup#id}. |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.Initializer.parameter.includeUsers">include_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Fetch group users, having default off cuts down on API calls. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/everyone_group#id DataOktaEveryoneGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_users`<sup>Optional</sup> <a name="include_users" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.Initializer.parameter.includeUsers"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Fetch group users, having default off cuts down on API calls.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/everyone_group#include_users DataOktaEveryoneGroup#include_users}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.resetIncludeUsers">reset_include_users</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_include_users` <a name="reset_include_users" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.resetIncludeUsers"></a>

```python
def reset_include_users() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_everyone_group

dataOktaEveryoneGroup.DataOktaEveryoneGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_everyone_group

dataOktaEveryoneGroup.DataOktaEveryoneGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_everyone_group

dataOktaEveryoneGroup.DataOktaEveryoneGroup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.includeUsersInput">include_users_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.includeUsers">include_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `include_users_input`<sup>Optional</sup> <a name="include_users_input" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.includeUsersInput"></a>

```python
include_users_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `include_users`<sup>Required</sup> <a name="include_users" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.includeUsers"></a>

```python
include_users: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaEveryoneGroupConfig <a name="DataOktaEveryoneGroupConfig" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_everyone_group

dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  include_users: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/everyone_group#id DataOktaEveryoneGroup#id}. |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.includeUsers">include_users</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Fetch group users, having default off cuts down on API calls. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/everyone_group#id DataOktaEveryoneGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_users`<sup>Optional</sup> <a name="include_users" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.includeUsers"></a>

```python
include_users: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Fetch group users, having default off cuts down on API calls.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/everyone_group#include_users DataOktaEveryoneGroup#include_users}

---


