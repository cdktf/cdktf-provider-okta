# `data_okta_idp_social`

Refer to the Terraform Registory for docs: [`data_okta_idp_social`](https://registry.terraform.io/providers/okta/okta/4.6.1/docs/data-sources/idp_social).

# `dataOktaIdpSocial` Submodule <a name="`dataOktaIdpSocial` Submodule" id="@cdktf/provider-okta.dataOktaIdpSocial"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaIdpSocial <a name="DataOktaIdpSocial" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/data-sources/idp_social okta_idp_social}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_idp_social

dataOktaIdpSocial.DataOktaIdpSocial(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.id">id</a></code> | <code>str</code> | The id of the social idp to retrieve, conflicts with `name`. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the social idp to retrieve, conflicts with `id`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.id"></a>

- *Type:* str

The id of the social idp to retrieve, conflicts with `name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/data-sources/idp_social#id DataOktaIdpSocial#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.name"></a>

- *Type:* str

The name of the social idp to retrieve, conflicts with `id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/data-sources/idp_social#name DataOktaIdpSocial#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOktaIdpSocial resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.isConstruct"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_idp_social

dataOktaIdpSocial.DataOktaIdpSocial.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_idp_social

dataOktaIdpSocial.DataOktaIdpSocial.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_idp_social

dataOktaIdpSocial.DataOktaIdpSocial.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_idp_social

dataOktaIdpSocial.DataOktaIdpSocial.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOktaIdpSocial resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOktaIdpSocial to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOktaIdpSocial that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/data-sources/idp_social#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOktaIdpSocial to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.accountLinkAction">account_link_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.accountLinkGroupInclude">account_link_group_include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.authorizationBinding">authorization_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.authorizationUrl">authorization_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.deprovisionedAction">deprovisioned_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.groupsAction">groups_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.groupsAssignment">groups_assignment</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.groupsAttribute">groups_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.groupsFilter">groups_filter</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.issuerMode">issuer_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.maxClockSkew">max_clock_skew</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.profileMaster">profile_master</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.protocolType">protocol_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.provisioningAction">provisioning_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.subjectMatchAttribute">subject_match_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.subjectMatchType">subject_match_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.suspendedAction">suspended_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.tokenBinding">token_binding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.tokenUrl">token_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.usernameTemplate">username_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `account_link_action`<sup>Required</sup> <a name="account_link_action" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.accountLinkAction"></a>

```python
account_link_action: str
```

- *Type:* str

---

##### `account_link_group_include`<sup>Required</sup> <a name="account_link_group_include" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.accountLinkGroupInclude"></a>

```python
account_link_group_include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization_binding`<sup>Required</sup> <a name="authorization_binding" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.authorizationBinding"></a>

```python
authorization_binding: str
```

- *Type:* str

---

##### `authorization_url`<sup>Required</sup> <a name="authorization_url" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.authorizationUrl"></a>

```python
authorization_url: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `deprovisioned_action`<sup>Required</sup> <a name="deprovisioned_action" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.deprovisionedAction"></a>

```python
deprovisioned_action: str
```

- *Type:* str

---

##### `groups_action`<sup>Required</sup> <a name="groups_action" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.groupsAction"></a>

```python
groups_action: str
```

- *Type:* str

---

##### `groups_assignment`<sup>Required</sup> <a name="groups_assignment" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.groupsAssignment"></a>

```python
groups_assignment: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `groups_attribute`<sup>Required</sup> <a name="groups_attribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.groupsAttribute"></a>

```python
groups_attribute: str
```

- *Type:* str

---

##### `groups_filter`<sup>Required</sup> <a name="groups_filter" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.groupsFilter"></a>

```python
groups_filter: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `issuer_mode`<sup>Required</sup> <a name="issuer_mode" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.issuerMode"></a>

```python
issuer_mode: str
```

- *Type:* str

---

##### `max_clock_skew`<sup>Required</sup> <a name="max_clock_skew" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.maxClockSkew"></a>

```python
max_clock_skew: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `profile_master`<sup>Required</sup> <a name="profile_master" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.profileMaster"></a>

```python
profile_master: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `protocol_type`<sup>Required</sup> <a name="protocol_type" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.protocolType"></a>

```python
protocol_type: str
```

- *Type:* str

---

##### `provisioning_action`<sup>Required</sup> <a name="provisioning_action" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.provisioningAction"></a>

```python
provisioning_action: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `subject_match_attribute`<sup>Required</sup> <a name="subject_match_attribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.subjectMatchAttribute"></a>

```python
subject_match_attribute: str
```

- *Type:* str

---

##### `subject_match_type`<sup>Required</sup> <a name="subject_match_type" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.subjectMatchType"></a>

```python
subject_match_type: str
```

- *Type:* str

---

##### `suspended_action`<sup>Required</sup> <a name="suspended_action" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.suspendedAction"></a>

```python
suspended_action: str
```

- *Type:* str

---

##### `token_binding`<sup>Required</sup> <a name="token_binding" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.tokenBinding"></a>

```python
token_binding: str
```

- *Type:* str

---

##### `token_url`<sup>Required</sup> <a name="token_url" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.tokenUrl"></a>

```python
token_url: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `username_template`<sup>Required</sup> <a name="username_template" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaIdpSocialConfig <a name="DataOktaIdpSocialConfig" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_okta import data_okta_idp_social

dataOktaIdpSocial.DataOktaIdpSocialConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.id">id</a></code> | <code>str</code> | The id of the social idp to retrieve, conflicts with `name`. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.name">name</a></code> | <code>str</code> | The name of the social idp to retrieve, conflicts with `id`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.id"></a>

```python
id: str
```

- *Type:* str

The id of the social idp to retrieve, conflicts with `name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/data-sources/idp_social#id DataOktaIdpSocial#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the social idp to retrieve, conflicts with `id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.1/docs/data-sources/idp_social#name DataOktaIdpSocial#name}

---



